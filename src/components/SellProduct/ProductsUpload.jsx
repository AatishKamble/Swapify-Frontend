import { useState } from "react";

const ProductsUpload = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [address, setAddress] = useState('');
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
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

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                                         focus:border-blue-500 focus:ring-blue-500
                                         transition duration-150 ease-in-out
                                         text-gray-900 py-3 px-4"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                            />
                        </div>

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

                        <div className="flex justify-end">
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