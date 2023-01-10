import './SMIcard.scss';
import { motion } from 'framer-motion';



const SMIcard = ({title, description, picture, tags, link, onCursorCardEnter, onCursorDefault}) => {

  const onCardHoverCursor = () => {
    onCursorCardEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  return (
    <motion.div className="smicard" >
        <a href         = {link}
           onMouseEnter = {onCardHoverCursor} 
           onMouseLeave = {onCursorLeave} 
           target       = "_blank" 
           rel          = "noreferrer" 
           className    = 'smicard__link'>
          <img src = {picture} 
               alt = {title} 
               className = "smicard__img"/>
        </a>

        <h3 className = 'smicard__title'>
          <a href        = {link} 
            onMouseEnter = {onCardHoverCursor} 
            onMouseLeave = {onCursorLeave}
            target       = "_blank" 
            rel          = "noreferrer" >
            {title}
          </a>
        </h3>
        <p className='smicard__description'>{description}</p>

        <small className='smicard__tags'>{tags}</small>
    </motion.div>
  )
}


export default SMIcard;

