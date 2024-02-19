import { setActive} from '../../../../store/categories/categories.slice';
import styles from './CategoryTab.module.scss';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const CategoryTab = ({ text, categoryName }) => {
    const category = useSelector((state) => state.categoriesSlice)
    const dispatch = useDispatch()


    const getActive = () => {
        dispatch(setActive(categoryName))
    }

    return (
        <button
            className={categoryName === category ? styles.active_category : styles.category_button}
            onClick={getActive}
        >
            {text}
        </button>
    )
}

export default CategoryTab