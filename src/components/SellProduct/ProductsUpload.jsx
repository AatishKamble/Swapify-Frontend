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
  <>
  

        <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-gray-700 font-semibold mb-2">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
               
                <div className="mb-4">
                    <label htmlFor="expectedPrice" className="block text-gray-700 font-semibold mb-2">Expected Price</label>
                    <input
                        type="text"
                        id="expectedPrice"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={expectedPrice}
                        onChange={(e) => setExpectedPrice(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                    <input
                        type="text"
                        id="address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="productDescription" className="block text-gray-700 font-semibold mb-2">Product Description</label>
                    <textarea
                        rows={10}
                        id="productDescription"
                        className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="images" className="block text-gray-700 font-semibold mb-2">Upload Images</label>
                    <input
                        type="file"
                        id="images"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
  
  </>
  )
}

export default ProductsUpload