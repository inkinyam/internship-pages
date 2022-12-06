import './Card.scss';

const Card = ({title, description, picture, order}) => {
 
  const descriptionClassList = order? 'card__description' : 'card__description card__description_first'
  const pictureClassList = (picture  ==='')? 'card__picture_hidden': 'card__picture';

  return (
    <section className='card'>
      <h4 className='card__title'>{title}</h4>
      <p className={descriptionClassList}>{description}</p>
      <img src={picture} alt={title} className = {pictureClassList}/>

    </section>
  )
}

export default Card;