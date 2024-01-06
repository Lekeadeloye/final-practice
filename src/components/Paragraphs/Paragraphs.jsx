import { useState } from 'react';
import './paragraphs.css';

function Paragraphs() {

  const randomNum = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleClickDecrease = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <section className='grid-container'>
        {randomNum > 5 ? <p>Leke is the Greatest!</p> : <p>Leke, you could be better</p>}
        <p>{count}</p>
        <button className="btn" onClick={handleClickIncrease}>Increase Count</button>
        <button className="btn" onClick={handleClickDecrease}>Decrease Count</button>
      </section>

    </>
  )
}

export default Paragraphs;