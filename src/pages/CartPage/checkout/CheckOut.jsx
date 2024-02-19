import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotalPrice, postOrder } from '../../../store/cart/cart.slice'
import styles from './Checkout.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


const CheckOut = () => {
  const cart = useSelector((state) => state.cartSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotalPrice())

  }, [cart])

  const sendOrder = () => {
    dispatch(postOrder(cart))
  }

  const {isAuth} = useAuth()

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>합계:</span> $ {cart.totalPrice.toFixed(2)}
        </p>

        {isAuth ?
          <button
            className={styles.checkout_button}
            onClick={() => sendOrder()}
          >
            계산하기
          </button>
          :
          <Link className={styles.checkout_button} to="/login">
            로그인
          </Link>
        }

      </div>
    </div>
  )
}

export default CheckOut
