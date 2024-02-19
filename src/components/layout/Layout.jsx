import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

const Layout = () => {
  return (

    //기본 레이아웃 Outlet안에 보여지게 할 페이지들이 들어감
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
