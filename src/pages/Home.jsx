import '../styles/home.scss'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Filter from '../components/Filter'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Featured />
      <Filter />
      <Reviews />
    </div>
  )
}

export default Home;