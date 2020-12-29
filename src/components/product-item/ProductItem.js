import React from "react";
import './ProductItem.css'

export const ProductItem = ({item: {category, description, id, image, price, title}}) => {
  return (
      <div>
        <h4>{id}</h4>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <img className='itemImg' src={image} alt=""/>
        <h4>{price}</h4>
        <h4>{title}</h4>
        <hr/>
      </div>
  );
}