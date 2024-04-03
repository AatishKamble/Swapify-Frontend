import axios from "axios";
import { API_BASE_URL } from "../../configApi/configApi";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTRER_FAILURE, REGISTRER_REQUEST, REGISTRER_SUCCESS } from "./ActionType";


const registerRequest = () => ({ type: REGISTRER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTRER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTRER_FAILURE, payload: error });

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: LOGIN_REQUEST });
const getUserSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });


const logoutUser = () => ({ type: LOGOUT, payload: null });

const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/singup`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch(registerSuccess(user.jwt));

    } catch (error) {
        dispatch(registerFailure(error.message));
    }

}

const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/singin`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch(loginSuccess(user.jwt));

    } catch (error) {
        dispatch(loginFailure(error.message));
    }

}


const getUserProfile = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data;

        dispatch(getUserSuccess(user));

    } catch (error) {
        dispatch(getUserFailure(error.message));
    }

}

const logout = () => (dispatch) => {
    dispatch(logoutUser());
}

