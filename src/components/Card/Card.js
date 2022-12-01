import './Card.scss';

const Card = ({title, description, picture, order}) => {
 
  const descriptionClassList = order? 'card__description' : 'card__description card__description_first'


  return (
    <section className='card'>
      <h4 className='card__title'>{title}</h4>
      <p className={descriptionClassList}>{description}</p>

    </section>
  )
}

export default Card;