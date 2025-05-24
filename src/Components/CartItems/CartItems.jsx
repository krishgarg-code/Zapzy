import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return<div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-item' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems [e.id]}</p>
                    <button className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} > Remove </button>
                </div>
                <hr />
            </div>
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${all_product.reduce((acc, e) => {
                            return acc + (e.new_price * cartItems[e.id]);
                        }, 0)}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${all_product.reduce((acc, e) => {
                            return acc + (e.new_price * cartItems[e.id]);
                        }, 0)}</h3>
                    </div>
                </div>
                <button className='cartitems-checkout'>Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>Enter the promo code </p>
                <div className="cartitems-promobox">
                <input type="text" placeholder='Promo code' />
                <button className='cartitems-promocode-button'>Apply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems