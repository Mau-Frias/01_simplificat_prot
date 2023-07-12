import './title.css';
const Title = ({ words, children = 'Title' }) => {
  return (
    <section className='title-container'>
      <h1 className='titleMessage'>
        <div className="message">
          {
            words.map((word, index) => (
              <div className={`word${index + 1}`} key={index}>{word}</div>
            ))
          }
        </div>
      </h1>
      <h1 className='title'>
        {children}
      </h1>
    </section>
  );
};

export default Title;