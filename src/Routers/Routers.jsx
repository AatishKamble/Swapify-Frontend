import { Home } from '../pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import ProfileEdit from '../components/ProfileEdit/ProfileEdit'
import Profile from '../components/ProfileInformation/Profile'
import Address from '../components/Address/Address'
import OrderSummary from '../components/OrderSummary/OrderSummary'

import OrderDetails from '../components/OrderDetails/OrderDetail'
import Login from "../components/Login/Login.jsx"
import Products from '../components/Products/Products';
// import Product from '../components/Product/Product.jsx';
import Register from '../components/Register/Register';
import ProductDetails from '../components/ProductDetails/ProductDetails.jsx';
import Cart from '../components/UserCart/Cart.jsx';
import ShoppingCart from '../pages/ShoppingCart.jsx';
import Checkout from '../pages/Checkout.jsx';
import SellProduct from '../components/SellProduct/SellProduct.jsx';
import ProductsUpload from '../components/SellProduct/ProductsUpload.jsx';
import { useLocation } from 'react-router-dom';
import AccountDetail from '../components/AccountDetails/AccountDetail.jsx';
import Wishlist from '../components/WishList/WishList.jsx';
import AdminPage from '../components/AdminPage/AdminPage.jsx';
const Routers = () => {

// const location=useLocation();
//   const sellRoutes=[
//     '/sell-category',
//     '/sell-product-detail'
//   ];


  return (
    <Router>
      <div>

        {/* {sellRoutes.some(location.pathname.startsWith(sellRoutes))} */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile-edit' element={<ProfileEdit/>} />
          <Route path='/address-edit' element={<Address/>} />
          <Route path='/Orders' element={<OrderDetails/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path="/cart" element={<ShoppingCart />}/>
          <Route path='/items' element={<Products/>} />
          <Route path='/signup' element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/account" element={ <AccountDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminPage/>} />
         
          <Route path="/product/:productId" element={<ProductDetails />} />


          <Route path="/sell-product" element={<SellProduct />} />
          
          {/*I want to handle sell Product componetns*/ }
          {/* <Route path="/product" element={<Product/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default Routers