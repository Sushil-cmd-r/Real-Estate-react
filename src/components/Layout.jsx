import '../styles/layout.scss'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout