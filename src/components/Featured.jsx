import '../styles/featured.scss'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <section className='featured' id='featured'>
      <div className="featured-container">
        <h1>Featured Property</h1>
        <div className="featured-property">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </section>
  )
}

export default Featured