import { useState } from "react";
import { useDispatch } from "react-redux";
import { sellProduct } from "../../State/Product/Action";
import { useNavigate } from "react-router-dom";

const ProductsUpload = ({ selectedCategory, backButton }) => {
    const nav = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [village, setVillage] = useState('');
    const [street, setStreet] = useState('');
    const [pincode, setPincode] = useState('');
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };



    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("productDescription", productDescription);
        formData.append("expectedPrice", expectedPrice);
        formData.append("state", state);
        formData.append("city", city);
        formData.append("village", village);
        formData.append("street", street);
        formData.append("pincode", pincode);
        formData.append("mainCategory", selectedCategory.mainCategory);
        formData.append("subcategory", selectedCategory.subcategory);
    
        images.forEach((image, index) => {
            formData.append(`images`, image);
        });
    
        dispatch(sellProduct(formData,jwt));
        nav("/account");
    };
    
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Add Product</h2>
                        <p className="mt-2 text-center text-gray-600">Fill in the details to list your product</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="productName"
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                                         focus:border-blue-500 focus:ring-blue-500 
                                         transition duration-150 ease-in-out
                                         text-gray-900 py-3 px-4"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder="Enter product name"
                            />
                        </div>

                        <div>
                            <label htmlFor="expectedPrice" className="block text-sm font-medium text-gray-700">
                                Expected Price
                            </label>
                            <div className="mt-1 relative rounded-lg shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">₹</span>
                                </div>
                                <input
                                    type="text"
                                    id="expectedPrice"
                                    className="block w-full pl-7 rounded-lg border-gray-300 
                                             focus:border-blue-500 focus:ring-blue-500
                                             transition duration-150 ease-in-out
                                             text-gray-900 py-3 px-4"
                                    value={expectedPrice}
                                    onChange={(e) => setExpectedPrice(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <fieldset className="space-y-4 border border-gray-300 p-4 rounded-lg">
                            <legend className="text-lg font-semibold text-gray-700">Address Details</legend>
                            <div>
                                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</label>
                                <input
                                    type="text"
                                    id="street"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm py-3 px-4"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    placeholder="Enter street"
                                />
                            </div>
                            <div>
                                <label htmlFor="village" className="block text-sm font-medium text-gray-700">Village</label>
                                <input
                                    type="text"
                                    id="village"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm py-3 px-4"
                                    value={village}
                                    onChange={(e) => setVillage(e.target.value)}
                                    placeholder="Enter village"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm py-3 px-4"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder="Enter state"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm py-3 px-4"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="Enter city"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm py-3 px-4"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="Enter pincode"
                                />
                            </div>
                        </fieldset>

                        <div>
                            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
                                Product Description
                            </label>
                            <textarea
                                rows={6}
                                id="productDescription"
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                                         focus:border-blue-500 focus:ring-blue-500
                                         transition duration-150 ease-in-out
                                         text-gray-900 py-3 px-4 resize-none"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                placeholder="Describe your product..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Product Images
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="images"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                        >
                                            <span>Upload files</span>
                                            <input
                                                id="images"
                                                type="file"
                                                className="sr-only"
                                                multiple
                                                onChange={handleImageChange}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => backButton()}
                                className="inline-flex items-center px-6 py-3 border border-transparent 
                                         rounded-lg shadow-sm text-base font-medium text-white 
                                         bg-green-600 hover:bg-green-700 
                                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                         transition duration-150 ease-in-out"
                            >Back
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 border border-transparent 
                                         rounded-lg shadow-sm text-base font-medium text-white 
                                         bg-blue-600 hover:bg-blue-700 
                                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                         transition duration-150 ease-in-out"
                            >
                                List Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductsUpload;