import React from 'react'
import { useSelector } from 'react-redux'
import CartEmpty from '../../components/cart-empty/CartEmpty'
import CartList from './cart-list/CartList'
import CheckOut from './checkout/CheckOut'

const CartPage = () => {

  const { products } = useSelector((state) => state.cartSlice)

  return (
    <div className='page'>
      {products.length === 0 ? (
        <CartEmpty title="Cart" />
      ) : (
        <div className="container">
          <h1>장바구니</h1>
          <CartList />
          <CheckOut />
        </div>
      )}
    </div>
  )
}

export default CartPage
