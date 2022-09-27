import '../styles/featured.scss'
import { useInView } from 'react-intersection-observer'

const Featured = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <section className='featured' id='featured'>
      <div className="featured-container">
        <h1 >Featured Property</h1>
        <ul className="featured-property">
          <li className={`featuredCard ${inView && 'appear'}`} ref={ref}>
            <article className={`featuredCard-info ${inView && "grow"}`}></article>
          </li>
          <li className={`featuredCard ${inView && 'appear'}`} >
            <article className={`featuredCard-info ${inView && "grow"}`}></article>
          </li>
          <li className={`featuredCard ${inView && 'appear'}`} >
            <article className={`featuredCard-info ${inView && "grow"}`}></article>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Featured