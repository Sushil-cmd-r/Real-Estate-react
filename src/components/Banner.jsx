import '../styles/banner.scss'
import Search from './Search'
import { useInView } from 'react-intersection-observer'

const Banner = () => {
  const { ref, inView } = useInView();
  return (
    <section className='banner'>
      <h1 className="banner-heading" ref={ref}>
        Discover Property More Easily
      </h1>
      <p className="banner-subHeading">RealEst help People find there Perfect Home for better life</p>
      <Search inView={inView} />
    </section>
  )
}

export default Banner