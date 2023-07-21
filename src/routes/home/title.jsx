function Title({ words, children = 'Title' }) {
  return (
    <section className='dyn-title-container'>
      <h1 className='dyn-message-text'>
        <div className='dyn-message-cont'>
          {words.map((word, index) => (
            <div className={`dyn-message-word${index + 1}`} key={index}>
              {word}
            </div>
          ))}
        </div>
      </h1>
      <h1 className='dyn-title'>{children}</h1>
    </section>
  )
}

export default Title
