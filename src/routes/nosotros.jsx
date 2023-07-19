import './nosotros.css'
import { YCard } from '../components/YCard';

export default function Nosotros() {
  const cards = [
    {
      title: 'Socio 1',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain',
      imgURL: 'https://picsum.photos/200/300',
      id: 1
    },
    {
      title: 'Socio 2',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain',
      imgURL: 'https://picsum.photos/200/300',
      id: 2
    },
    {
      title: 'Socio 3',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain',
      imgURL: 'https://picsum.photos/200/300',
      id: 3
    }
  ]
  
  const isPar = (num) => {
    if(num%2 === 0){
      return true
    }else {
      return false
    }
  }
  
  return (
  <main className='nosotros'>
  <section className="ycards-section">
    <h1>Conocenos</h1>
        {cards.map(({ description, title, imgURL, id, par }) => (
          <YCard description={description} imgURL={imgURL} key={id} par={isPar(id)} >
            {title}
          </YCard> 
        ))}
    
  </section>
  </main>
  )
}