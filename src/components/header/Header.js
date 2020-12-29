import React from 'react'

export const Header = () => {
  return (
      <header className='d-flex justify-between align-center'>
        <h2>Hello in nedoshop</h2>
        <div className='d-flex justify-between'>
          <div className='mx-10 align-center'>wishlist:</div>
          <div className='mx-10 align-center'>cart:</div>
        </div>
      </header>
  );
}