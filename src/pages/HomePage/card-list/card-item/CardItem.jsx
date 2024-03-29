/* eslint-disable react/prop-types */
import styles from './CardItem.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../store/cart/cart.slice'

const CardItem = ({ item }) => {
  const { products } = useSelector((state) => state.cartSlice)

  const productMatching = products.some((product) => product.id === item.id);
  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(addToCart(item))
  }

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card" />
      </Link>
      <h5>{item.title.substring(0, 15)}...</h5>
      <div>
        <button
          disabled={productMatching}
          onClick={() => (productMatching === false) && addItemToCart()}
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>$ {item.price}</p>
      </div>
    </li>
  )
}

export default CardItem
