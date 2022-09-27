import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { useEffect } from 'react';
import { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import '../styles/reviews.scss'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  const [current, setCurrent] = useState(2);
  const { ref, inView } = useInView();

  const prevSlide = () => {
    setCurrent(prev => prev === 0 ? 0 : prev - 1)
  }

  const nextSlide = () => {
    setCurrent(prev => prev === 4 ? 4 : prev + 1)
  }

  useEffect(() => {
    if (inView) {
      setCurrent(2);
    }
  }, [inView])

  return (
    <section className='reviews'>
      <div className="reviews-container">
        <h1 >Our Reviews</h1>
        <ul className="reviews-cards">
          <ArrowLeft className={`icon-left ${current === 0 && 'inactive'}`} onClick={prevSlide} ref={ref} />
          {
            [...Array(5)].map((e, i) => (
              <ReviewCard key={i} index={i} current={current} inView={inView} />
            ))
          }
          <ArrowRight className={`icon-right ${current === 4 && 'inactive'}`} onClick={nextSlide} />
        </ul>
      </div>
    </section>
  )
}

export default Reviews