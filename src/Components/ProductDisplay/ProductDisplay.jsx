import React, { use } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
// import star_icon from "../assets/star_icon.png" ; I
// // import star_dull_icon from "../assets/star_dull_icon.png"


const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext (ShopContext);
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay-main-img'>
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>122</p>
                </div>
                <div className='productdisplay-right-price'>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam libero nam aliquam sunt exercitationem repellendus adipisci, perferendis</p>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className="productdisplay-right-size-option">S</div>
                        <div className="productdisplay-right-size-option">M</div>
                        <div className="productdisplay-right-size-option">L</div>
                        <div className="productdisplay-right-size-option">XL</div>  
                        <div className="productdisplay-right-size-option">XLL</div>  
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> define the category  </p>
                <p className='productdisplay-right-category'><span>Tags :</span> define the tags</p>
            </div>
        </div>
    )
}

export default ProductDisplay