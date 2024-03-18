import React from 'react'
import AddressCard from '../Checkout/AddressCard'
import ShoppingCart from '../../pages/Shopingcart'

const OrderSummary = () => {
  return (
    <div>
        <div className="bg-gray-400 p-5">
        <AddressCard/>
        </div>
        <ShoppingCart/>
    </div>
  )
}

export default OrderSummary