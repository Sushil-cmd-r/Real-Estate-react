import { LocationOn } from '@material-ui/icons'
import '../styles/filter.scss'
import Card from './Card'


const Navbar = () => {
  return (
    <nav className="filter-nav">
      <div className="filter-nav-left">
        <div className="filter-nav-link selected">
          All
        </div>
        <div className="filter-nav-link">
          Houses
        </div>
        <div className="filter-nav-link">
          Real Estates
        </div>
        <div className="filter-nav-link">
          Villas
        </div>
      </div>
      <div className='filter-nav-right'>
        <div className="filter-nav-link">
          <LocationOn />
          Location
        </div>
      </div>
    </nav>
  )
}

const Filter = () => {
  return (
    <section className='filter' id='filter'>
      <div className="filter-container">
        <Navbar />
        <div className="filter-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Filter