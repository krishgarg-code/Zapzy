import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import Newcollections from '../Components/Newcollections/Newcollections'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop
