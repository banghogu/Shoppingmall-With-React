import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const Form = ({ title, getData, firebaseError }) => {

  //useForm 을 등록할 때는 register, handleSubmit, formState: { errors }, reset을 가져온다.
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur' //blur 처리 가능
  })

  const onSubmit = ({ email, password }) => {
    getData(email, password)
    reset() //onSubmit이 마치면 form 다 비워둠
  }

  const userEmail = {
    required: "필수 필드입니다."
  }
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: { //최소 길이를 등록하고 이 길이 보다 짧을시 errors에 message가 들어간다.
      value: 6,
      message: "최소 6자입니다."
    }
  }

  return (
    //handleSubmit 함수 안에 실제로 실행 될 함수를 넣는다
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)} //register로 email을 등록하고 userEmail이라는 이메일 폼 타입을 지정해준다.
        />
        {errors?.email && (
          <div>
            <span className={styles.form_error}>
              {errors.email.message}
            </span>
          </div>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)} //register로 비번을 등록하고 userEmail이라는 비번 폼 타입을 지정해준다.
        />
        {errors?.password && (
          <div>
            <span className={styles.form_error}>
              {errors.password.message}
            </span>
          </div>
        )}
      </div>
      <button type='submit'>{title}</button>

      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  )
}

export default Form
