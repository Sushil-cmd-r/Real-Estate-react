import { LocationOn } from '@material-ui/icons'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
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
  const { ref, inView } = useInView({
    threshold: 1,
  });


  return (
    <section className='filter' id='filter' >
      <div className="filter-container">
        <div ref={ref}>
          <Navbar />
        </div>
        <div className="filter-cards">
          {
            [...Array(8)].map((e, i) => (
              <Card key={i} index={i + 1} inView={inView} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Filter