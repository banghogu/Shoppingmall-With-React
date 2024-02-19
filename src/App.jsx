import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OrderPage from './pages/OrderPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (

    //라우터 설정. 기본 Layout (header,footer)으로 감싸고, 주소에 따라 보여지는 페이지 다르게 하기
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product/:id' element={<DetailPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
