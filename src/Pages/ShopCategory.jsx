import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/item/Item';
import { useNavigate } from 'react-router-dom';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setIsDropdownOpen(false);
    navigate(`/${category}`);
  };

  const handleExploreMore = () => {
    switch(props.category) {
      case 'men':
        navigate('/Womens');
        break;
      case 'women':
        navigate('/Kids');
        break;
      case 'kid':
        navigate('/Mens');
        break;
      default:
        navigate('/Mens');
    }
  };

  return (
    <div className='Shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Sort by: <img src={dropdown_icon} alt="" />
          {isDropdownOpen && (
            <div className="category-dropdown">
              <div onClick={() => handleCategorySelect('Mens')}>Men</div>
              <div onClick={() => handleCategorySelect('Womens')}>Women</div>
              <div onClick={() => handleCategorySelect('Kids')}>Kids</div>
            </div>
          )}
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price} />
            )
          }
          else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore" onClick={handleExploreMore}>
        EXPLORE MORE
      </div>
    </div>
  )
}

export default ShopCategory
