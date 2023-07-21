import './YCard.css'

export function YCard({ children, description, imgURL, par }) {
  return (
    <div className={`y-card ${par ? 'y-par' : ''}`}>
      <section className='y-img-link-cont'>
        <img src={imgURL} alt='random' />
        <div className='y-links'>
          <a href='' target='_blank' rel='noopener noreferrer' title='Linkedin'>
            <i className='fa-brands fa-linkedin-in' />
          </a>
          <a href='' target='_blank' rel='noopener noreferrer' title='Email'>
            <i className='fa-regular fa-envelope' />
          </a>
        </div>
      </section>
      <section>
        <h2 className='y-title'>{children}</h2>
        <p>{description}</p>
      </section>
    </div>
  )
}
