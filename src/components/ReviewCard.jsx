import '../styles/reviewCard.scss';

const ReviewCard = ({ index, current, inView }) => {
  return (
    <li className={`reviewCard reviewCard-${index - current} ${inView && 'appear'}`}>
      <h1>{index}</h1>
    </li>
  )
}

export default ReviewCard