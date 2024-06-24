import { Outlet } from 'react-router-dom'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

const BaseLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default BaseLayout