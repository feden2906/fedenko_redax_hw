import React from "react";
import {ProductItem} from "../product-item";

export const ProductList = ({products}) => {

    return (
        <div>
          {products.map(item => <ProductItem item={item} key={item.id}/>)}
        </div>
    );
}