import './XCard.css'

function XCard({ children, description, imgURL }) {
  return (
    <div className='x-card'>
      <img src={imgURL} alt='random' />
      <div className='x-text-cont'>
        <h3 className='x-card-title'>{children}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default XCard
