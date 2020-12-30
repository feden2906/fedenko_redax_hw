import React from 'react'
import {useSelector} from "react-redux";

export const Header = () => {
  const {cart, wishlist} = useSelector(({cart: {cart}, wishlist:{wishlist}}) => ({
    wishlist, cart
  }))
  return (
      <header className='d-flex justify-between align-center'>
        <h2>Hello in nedoshop</h2>
        <div className='d-flex justify-between'>
          <div className='mx-10 align-center'>wishlist: {wishlist.length}</div>
          <div className='mx-10 align-center'>cart: {cart.length}</div>
        </div>
      </header>
  );
}