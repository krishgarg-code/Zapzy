import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum.jsx'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx'

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

=======
>>>>>>> 483cf0bf660c1d9cc840cfb0dc4b5b6a9522050b
export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
<<<<<<< HEAD
  const isMobile = useIsMobile();
  return (
    <div>
      {isMobile ? (
        <div style={{ marginTop: '18px' }} />
      ) : (
        <Breadcrum product={product} />
      )}
=======
  return (
    <div>
      <Breadcrum product = {product}/>
>>>>>>> 483cf0bf660c1d9cc840cfb0dc4b5b6a9522050b
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProducts/>

    </div>
  )
}

export default Product
