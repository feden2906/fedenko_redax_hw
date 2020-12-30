import React from "react";
import './ProductItem.css'

export const ProductItem = ({onAddToCart,
                              onAddToWishList,
                              isAddToWishList,
                              item,
                              item: {category, description, id, image, price, title}}) => {
  return (
      <div>
        <h4>{id}</h4>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <img className='itemImg' src={image} alt=""/>
        <h4>{price}</h4>
        <h4>{title}</h4>
        <button onClick={() => onAddToCart(item)}>add to cart</button>
        <button onClick={() => onAddToWishList(item)}>{isAddToWishList ? 'add to wishlist' : 'delete'}</button>
        <hr/>
      </div>
  );
}