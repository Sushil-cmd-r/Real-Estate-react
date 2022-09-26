import '../styles/home.scss'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Featured />
      <Filter />
    </div>
  )
}

export default Home;