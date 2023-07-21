import Title from './title.jsx'
import XCard from '../../components/XCard'
import './home.css'

import cards from '../../data/xcards.json'

export default function Home() {
  return (
    <div className='home'>
      <section className='hm-title-section'>
        <Title words={['Educa', 'Enseña', 'Gestiona']}>Simplemen-t</Title>
      </section>
      <section className='hm-cards-section'>  
      <h1 className='hm-cards-title title'>Proyectos</h1>
      <br />   
      <div className="hm-cards-cont">
        {cards.cards.map(({ description, title, imgURL, id }) => (
          <XCard description={description} imgURL={imgURL} key={id}>
            {title}
          </XCard>
        ))}
      </div>
      </section>
    </div>
  )
}
