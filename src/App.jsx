import Card from './card.jsx'
import Title from './title.jsx'
import Navbar from './navbar.jsx'
import './App.css'

const cards = [
  {
    title: 'Random',
    description: 'No se que poner',
    imgURL: 'https://picsum.photos/200/300',
    id: 1,
  },
  {
    title: 'Aleatorio',
    description: 'Si tu me hubieras dicho siempre la verdad',
    imgURL: 'https://picsum.photos/200/300',
    id: 2,
  },
  {
    title: 'Otra foto',
    description: '"Inserte descripción profunda"',
    imgURL: 'https://picsum.photos/200/300',
    id: 3,
  },
  {
    title: 'Otra foto',
    description: '"Inserte descripción profunda"',
    imgURL: 'https://picsum.photos/200/300',
    id: 4,
  }
]

const App = () => {
  return (
    <>
    <div className='App'>
      <Navbar />
      <section className='title-section'>
        <Title words={['Educa', 'Enseña', 'Gestiona']}>
          Simplemen-t
        </Title>
      </section>
      <section className='cards-section'>
        {
          cards.map(({ description, title, imgURL, id }) => (
            <Card description={description} imgURL={imgURL} key={id}>
              {title}
            </Card>
          ))
        }
      </section>
    </div>
    </>
  )
}
export default App
