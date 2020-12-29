import React, {useEffect, useCallback} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import {setProducts} from "./redux";

function App() {
  const {cart, wishlist, products} = useSelector(
      ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart, wishlist, products
      })
  );

  const dispatch  = useDispatch();

  useEffect(() => {
    // dispatch(setProducts)
      setProducts(dispatch)
  }, [])

  return (
      <div className="App">
        {products.length}
        <Header/>
        <ProductList/>
      </div>
  );
}

export default App;
