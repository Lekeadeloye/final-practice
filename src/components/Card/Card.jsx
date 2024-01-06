import './card.css';

function Card() {
  return (
    <>
      <section className="card-container">
        <img src="https://picsum.photos/300/300" alt="Random Image" className='card-image' />
        <h1 className='card-title'>Card Title</h1>
        <p className='card-description'>This is just a description of the card that I have made, add more details if you wish</p>
        <a href="CardPage" className='card-btn'>Learn More</a>
      </section>
    </>
  )
}

export default Card;