import React, { useState } from 'react';

const AdminPage = () => {
  // Sample data for buyer requests
  const [buyerRequests, setBuyerRequests] = useState([
    { id: 1, buyer: 'John Doe', product: 'iPhone 13', quantity: 2, status: 'pending', date: '2025-03-05' },
    { id: 2, buyer: 'Jane Smith', product: 'MacBook Pro', quantity: 1, status: 'pending', date: '2025-03-04' },
    { id: 3, buyer: 'Robert Johnson', product: 'AirPods Pro', quantity: 3, status: 'pending', date: '2025-03-06' },
  ]);

  // Sample data for available products
  const [products, setProducts] = useState([
    { id: 1, name: 'iPhone 13', category: 'Electronics', price: 799, stock: 15, seller: 'TechWorld' },
    { id: 2, name: 'MacBook Pro', category: 'Electronics', price: 1299, stock: 8, seller: 'Apple Reseller' },
    { id: 3, name: 'AirPods Pro', category: 'Audio', price: 249, stock: 20, seller: 'AudioHub' },
    { id: 4, name: 'Samsung Galaxy S22', category: 'Electronics', price: 749, stock: 12, seller: 'Mobile Planet' },
    { id: 5, name: 'iPad Air', category: 'Electronics', price: 599, stock: 10, seller: 'Apple Reseller' },
  ]);

  // Sample data for seller cancellation requests with added fields to match the image
  const [cancellationRequests, setCancellationRequests] = useState([
    { 
      id: 1, 
      seller: 'TechWorld', 
      product: 'Samsung S20 Ultra',
      description: 'Samsung S20 Ultra with minor scratches. Battery health 89%',
      productId: 1,
      reason: 'Product no longer available',
      requestDate: '2025-03-04', 
      status: 'pending',
      price: 4000000,
      location: 'Near Akurdi Railway station Nigdi Pune',
      city: 'pune, pune',
      state: 'Maharashtra',
      pincode: '411044',
      category: 'Mobile Phones & Tablets',
      image: '/api/placeholder/120/120'
    },
    { 
      id: 2, 
      seller: 'AudioHub', 
      product: 'iPhone 12',
      description: 'iPhone 12 in good condition with minor scratches. Battery health 92%',
      productId: 6,
      reason: 'Item sold elsewhere',
      requestDate: '2025-03-05', 
      status: 'pending',
      price: 35000,
      location: 'Near FC Road',
      city: 'pune, pune',
      state: 'Maharashtra',
      pincode: '411005',
      category: 'Mobile Phones & Tablets',
      image: '/api/placeholder/120/120'
    },
    { 
      id: 3, 
      seller: 'Mobile Planet', 
      product: 'Samsung Galaxy S22',
      description: 'Samsung Galaxy S22 like new condition. All accessories included.',
      productId: 4,
      reason: 'Listing error - wrong specifications', 
      requestDate: '2025-03-06', 
      status: 'pending',
      price: 45000,
      location: 'Hinjewadi IT Park',
      city: 'pune, pune',
      state: 'Maharashtra',
      pincode: '411057',
      category: 'Mobile Phones & Tablets',
      image: '/api/placeholder/120/120'
    },
  ]);

  // State for active tab
  const [activeTab, setActiveTab] = useState('cancellations');

  // Handler for accepting a buyer request
  const handleAccept = (id) => {
    setBuyerRequests(
      buyerRequests.map(request => 
        request.id === id ? { ...request, status: 'accepted' } : request
      )
    );
  };

  // Handler for rejecting a buyer request
  const handleReject = (id) => {
    setBuyerRequests(
      buyerRequests.map(request => 
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
  };

  // Handler for approving a cancellation request
  const handleApproveCancellation = (id) => {
    // Update the cancellation request status
    setCancellationRequests(
      cancellationRequests.map(request => 
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
    
    // Find the request to get the product ID
    const request = cancellationRequests.find(req => req.id === id);
    
    // Remove the product from the product list
    if (request) {
      setProducts(products.filter(product => product.id !== request.productId));
    }
  };

  // Handler for denying a cancellation request
  const handleDenyCancellation = (id) => {
    setCancellationRequests(
      cancellationRequests.map(request => 
        request.id === id ? { ...request, status: 'denied' } : request
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Swapify Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('requests')}
              className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'requests'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Buyer Requests
            </button>
            <button
              onClick={() => setActiveTab('cancellations')}
              className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cancellations'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Cancellation Requests
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'products'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Product Inventory
            </button>
          </nav>
        </div>

        {/* Buyer Requests Tab */}
        {activeTab === 'requests' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Buyer Requests
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Review and manage purchase requests from buyers
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {buyerRequests.length > 0 ? (
                buyerRequests.map((request) => (
                  <li key={request.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-indigo-600 truncate">
                          {request.buyer}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          {request.product} - Qty: {request.quantity}
                        </span>
                        <span className="text-sm text-gray-500">
                          Requested on: {request.date}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        {request.status === 'pending' ? (
                          <>
                            <button
                              onClick={() => handleAccept(request.id)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleReject(request.id)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            request.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-5 text-center text-sm text-gray-500">
                  No pending requests at this time.
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Seller Cancellation Requests Tab - Updated to match the image */}
        {activeTab === 'cancellations' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Seller Product Cancellation Requests
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Review seller requests to remove products from the marketplace
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {cancellationRequests.length > 0 ? (
                cancellationRequests.map((request) => (
                  <li key={request.id} className="p-4 sm:p-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <div className="flex flex-col md:flex-row">
                        {/* Product Image */}
                        <div className="mr-4 flex-shrink-0 mb-3 md:mb-0">
                          <img 
                            src={request.image} 
                            alt={request.product} 
                            className="h-32 w-32 object-cover rounded-md"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Left column - Product info */}
                          <div className="col-span-1">
                            <h3 className="text-lg font-medium text-gray-900 mb-1">{request.product}</h3>
                            <p className="text-sm text-gray-500 mb-2">{request.description}</p>
                            <p className="text-xl font-semibold text-indigo-600">₹ {request.price.toLocaleString()}</p>
                          </div>
                          
                          {/* Middle column - Location */}
                          <div className="col-span-1">
                            <p className="text-sm font-medium text-gray-900 mb-1">{request.location}</p>
                            <p className="text-sm text-gray-500">{request.city}</p>
                            <p className="text-sm text-gray-500">{request.state} - {request.pincode}</p>
                          </div>
                          
                          {/* Right column - Category and status */}
                          <div className="col-span-1 flex justify-between flex-col">
                            <div>
                              <p className="text-sm font-medium text-indigo-600">{request.category}</p>
                              <p className="text-sm text-gray-500 mt-1">Seller: {request.seller}</p>
                              <p className="text-sm text-gray-500">Reason: {request.reason}</p>
                            </div>
                            
                            <div className="mt-2">
                              <span className="inline-flex px-2 py-1 text-sm font-medium rounded text-red-800 bg-red-100">
                                canceled request
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Admin action buttons */}
                      {request.status === 'pending' && (
                        <div className="mt-4 flex justify-end space-x-2">
                          <button
                            onClick={() => handleApproveCancellation(request.id)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Approve Cancellation
                          </button>
                          <button
                            onClick={() => handleDenyCancellation(request.id)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Deny Cancellation
                          </button>
                        </div>
                      )}
                      
                      {/* Status indicator for processed requests */}
                      {request.status !== 'pending' && (
                        <div className="mt-4 flex justify-end">
                          <span className={`px-2 py-1 inline-flex text-sm font-medium rounded ${
                            request.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {request.status === 'approved' ? 'Cancellation Approved' : 'Cancellation Denied'}
                          </span>
                        </div>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-5 text-center text-sm text-gray-500">
                  No cancellation requests at this time.
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Product Inventory
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                View and manage your product inventory
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Seller
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{product.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{product.seller}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">${product.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.stock}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;