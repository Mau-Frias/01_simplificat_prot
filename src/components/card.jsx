import './card.css'

function Card({ children, description, imgURL }) {
  return (
    <div className='card'>
      <img src={imgURL} alt='random' />
      <h3>{children}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
