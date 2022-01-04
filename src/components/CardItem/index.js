// Write your code here.
import './index.css'

const Cards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card-container ${className}`}>
      <h1 className="title-class">{title}</h1>
      <p className="description-class">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default Cards
