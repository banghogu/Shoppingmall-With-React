import { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../../firebase'
import { useDispatch } from 'react-redux'
import { setUsers } from '../../../store/user/user.slice'
import { setUserId } from '../../../store/cart/cart.slice'

const SignUp = () => {
  const navigate = useNavigate()
  const [firebaseError, setFirebaseError] = useState("")
  const auth = getAuth(app)
  const dispatch = useDispatch()


  const handleSign = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCre) => {
        dispatch(setUsers({
          email: userCre.user.email,
          token: userCre.user.refreshToken,
          id: userCre.user.uid
        }))
        dispatch(setUserId(userCre.user.uid))
        navigate('/')
      }
    )
      .catch((error) => {
        return error && setFirebaseError(error)
      })

  }

  return (
    <Form
      title={"가입하기"}
      getData={handleSign}
      firebaseError={firebaseError}
    />
  )
}

export default SignUp
