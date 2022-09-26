import { Apartment } from '@material-ui/icons'
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="nav-container">
        <div className="nav-left">
          <Apartment fontSize='large' />
          <h2>RealEst</h2>
        </div>
        <ul className="nav-middle">
          <li className="nav-link">
            {/* // eslint-disable-next-line  */}
            <a href="#">For Sell</a>
          </li>
          <li className="nav-link">
            {/* // eslint-disable-next-line  */}
            <a href="#">For Rent</a>
          </li>
          <li className="nav-link">
            {/* // eslint-disable-next-line  */}
            <a href="#">New Property</a>
          </li>
          <li className="nav-link">
            {/* // eslint-disable-next-line  */}
            <a href="#">Blogs</a>
          </li>
          <li className="nav-link">
            {/* // eslint-disable-next-line  */}
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="nav-right">
          <div className="nav-link">
            {/* // eslint-disable-next-line  */}
            <a href="#">Login</a>
          </div>
          <div className="nav-link register">
            {/* // eslint-disable-next-line  */}
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar