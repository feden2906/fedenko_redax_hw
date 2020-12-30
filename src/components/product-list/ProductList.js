import React from "react";
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishList} from "../../redux";

export const ProductList = ({products}) => {
    const dispatch = useDispatch()
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist)
const onAddToCart = (item) => {
    dispatch(toggleItemInCart(item))
}
const onAddToWishList = (item) => {

    dispatch(toggleItemInWishList(item))
}
    return (
        <div>
          {products.map(item =>
              <ProductItem
                     item={item}
                     key={item.id}
                     onAddToCart={onAddToCart}
                     onAddToWishList={onAddToWishList}
                     isAddedToWishList={!!wishlist.find(({id}) => id === item.id)}
          />)}
        </div>
    );
}
