import './nosotros.css'
import { YCard } from '../../components/YCard'

export default function Nosotros() {
  const cards = [
    {
      title: 'Socio 1',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain',
      imgURL: 'default-pfp.jpg',
      id: 1
    },
    {
      title: 'Socio 2',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain',
      imgURL: 'default-pfp.jpg',
      id: 2
    },
    {
      title: 'Socio 3',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain',
      imgURL: 'default-pfp.jpg',
      id: 3
    }
  ]

  const isOdd = (num) => {
    if (num % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <main className='nosotros'>
      <section className='ns-cards-section'>
        <h1 className='ns-title title'>Conocenos</h1>
        {cards.map(({ description, title, imgURL, id }) => (
          <YCard
            description={description}
            imgURL={imgURL}
            key={id}
            par={isOdd(id)}>
            {title}
          </YCard>
        ))}
      </section>
    </main>
  )
}
