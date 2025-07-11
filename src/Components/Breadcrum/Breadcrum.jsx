import React from 'react';
import './Breadcrum.css';

const Breadcrum = ({ product }) => {
  if (!product) return null;
  return (
    <div className="breadcrum">
      Home / {product.category} / {product.name}
    </div>
  );
};

export default Breadcrum;
