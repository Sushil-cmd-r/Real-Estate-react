import { Bathtub, Fullscreen, KingBed } from '@material-ui/icons'
import '../styles/card.scss'
import image from '/home/sushil/Projects/edi/src/assets/images/house-4.jpg'

const Card = ({ index, inView }) => {

  return (
    <div className={`card ${inView && 'appear'}`} style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="card-top">
        <img src={image} alt="image" className={`${inView && 'appear'}`} style={{ transitionDelay: `${index * 70}ms` }} />
      </div>
      <div className="card-bottom">
        <div className="card-name">
          <p>White Home Alam Sutra</p>
        </div>
        <div className="card-info">
          <span>
            <KingBed />
            <p>4 room</p>
          </span>
          <span>
            <Bathtub />
            <p>2 room</p>
          </span>
          <span>
            <Fullscreen />
            <p>240 m<sup>2</sup></p>
          </span>
        </div>
        <div className="card-price">
          <h3>
            $120,000,00
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card