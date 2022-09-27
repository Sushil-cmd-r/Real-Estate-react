import '../styles/layout.scss'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout