import React, { useState, useContext, useEffect } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import BackButton from '../BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const navigate = useNavigate();

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart(product.id);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart(product.id);
        navigate('/cart');
    };

    const isMobile = useIsMobile();

    return (
        <div className='productdisplay'>
            <div className="back-button-container">
                <BackButton />
            </div>
            {showNotification && (
                <div className="cart-notification">
                    <div className="notification-content">
                        <div className="confetti-container">
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                        </div>
                        <div className="notification-text">
                            <span className="checkmark">✓</span>
                            <h2>Product Added to Cart!</h2>
                        </div>
                    </div>
                </div>
            )}
            {isMobile ? (
                <div className='productdisplay-left mobile-product-images'>
                    <div className='productdisplay-main-img'>
                        <img src={product.image} alt='' />
                    </div>
                    <div className='productdisplay-img-list'>
                        <img src={product.image} alt='' />
                        <img src={product.image} alt='' />
                        <img src={product.image} alt='' />
                        <img src={product.image} alt='' />
                    </div>
                </div>
            ) : (
                <div className='productdisplay-left'>
                    <div className='productdisplay-img-list'>
                        <img src={product.image} alt='' />
                        <img src={product.image} alt='' />
                        <img src={product.image} alt='' />
                        <img src={product.image} alt='' />
                    </div>
                    <div className='productdisplay-main-img'>
                        <img src={product.image} alt='' />
                    </div>
                </div>
            )}
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
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
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size}
                                className={`productdisplay-right-size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="productdisplay-right-buttons">
                    <button onClick={handleAddToCart}>ADD TO CART</button>
                    <button onClick={handleBuyNow} className="buy-now-button">BUY NOW</button>
                </div>
                <p className='productdisplay-right-category'><span>Category :</span> {product.category} </p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay