import './Card.scss';


const Card= ({quote}: {quote: string}) => {
  return (
    <div className="quote-of-the-day">
      <h2>Quote of the Day</h2>
      <p>{quote}</p>
    </div>
  )
}

export default Card;