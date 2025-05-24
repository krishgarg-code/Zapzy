import React from 'react'
import './newcollections.css'
import new_collection from '../assets/new_collections.js'
import Item from '../item/Item'

const Newcollections = () => {
  return (
    <div className='new-collections' id="new-collections">
        <h1>TRENDY COLLECTIONS</h1>
        <hr />
        <div className="cards">
        <div className="collections">
            {new_collection.map((item, i) => {
                return <Item key={i} id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price}/>
            }
            )}
        </div>
        </div>
    </div>
  )
}

export default Newcollections