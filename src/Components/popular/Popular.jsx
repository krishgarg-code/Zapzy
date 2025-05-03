import React from 'react'
import './popular.css'
import data_product from '../assets/data.js'
import Item from '../item/Item' 

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr/>
      <div className="cards1">
        <div className='popular-items'>
          {data_product.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular