import React, { useContext }  from 'react'
import {ShopContext} from '../../context/shop-context'

export const  Product=(props) =>{
    const {id, productName, productPrice, productImage} = props.data;
  
     const { addToCart, cartItems} = useContext(ShopContext);
     const cartItemAmmount = cartItems[id]

    return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${productPrice}</p>
        </div>
        <button className='addToCartBttn'
          onClick={() => addToCart(id)}
         >Add To Cart {
            cartItemAmmount > 0 && <>  ({cartItemAmmount})</>
         }
         
         </button>

    </div>
  )
}
