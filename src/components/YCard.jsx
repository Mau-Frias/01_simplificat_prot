import './YCard.css'

export function YCard({ children, description, imgURL, par}) {
  return (
    <div className={ `ycard ${par? 'par': ''}`}>
      <img src={imgURL} alt='random' />
      <section>
        <h2>
          {children}
          <div className="links">
          <a href=''>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className='fa-solid fa-square-envelope'></i>
          </a>
            
          </div>
        </h2>
        <p>{description}</p>
      </section>
    </div>
  )
}