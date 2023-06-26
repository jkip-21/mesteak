import React, { useContext } from 'react'
import {PRODUCTS} from '../../products'
import {CartItem} from '../cart/CartItem'
import { ShopContext } from '../../context/shop-context'
import '../../styles/cart.css'
import { useNavigate} from 'react-router-dom'


export const  Cart=() =>{
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {/* Grabbing the product list */}
        {PRODUCTS.map((product)=>{
          // how to tell if a product is in the cart
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ?(
      <div className='checkout'>
        
       <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
        
      </div>
        ): (
          <h1>Your Cart is Empty</h1>
        )}
    </div>
  )
}
