import { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../../firebase'
import { useDispatch } from 'react-redux'
import { setUsers } from '../../../store/user/user.slice'
import { setUserId } from '../../../store/cart/cart.slice'

const SiginIn = () => {
    const navigate = useNavigate()
    const [firebaseError, setFirebaseError] = useState("")
    const auth = getAuth(app)
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((userCre) => {
            dispatch(setUsers({
                email: userCre.user.email,
                token: userCre.user.refreshToken,
                id: userCre.user.uid
            }))
            dispatch(setUserId(userCre.user.uid))
            navigate('/')
        })
            .catch(error => {
                return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다")
            })
    }

    return (
        <Form
            title={"로그인"}
            getData={handleLogin}
            firebaseError={firebaseError}
        />
    )
}

export default SiginIn
