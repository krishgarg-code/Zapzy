import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';

<<<<<<< HEAD
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
    const isMobile = useIsMobile();

  return (
    <div className='cartitems'>
      {!isMobile && (
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      )}
      {!isMobile && <hr />}
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
          return isMobile ? (
            <div className="cartitem-mobile-card" key={e.id}>
              <img src={e.image} alt="" className='carticon-product-item' />
              <div className="cartitem-mobile-info">
                <div><span className="cartitem-mobile-label">Title:</span> {e.name}</div>
                <div><span className="cartitem-mobile-label">Price:</span> ${e.new_price}</div>
                <div><span className="cartitem-mobile-label">Quantity:</span> {cartItems[e.id]}</div>
                <div><span className="cartitem-mobile-label">Total:</span> ${e.new_price*cartItems [e.id]}</div>
                <button className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} > Remove </button>
              </div>
            </div>
          ) : (
            <div key={e.id}>
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
          )
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
=======
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
>>>>>>> 483cf0bf660c1d9cc840cfb0dc4b5b6a9522050b
    </div>
  )
}

export default CartItems