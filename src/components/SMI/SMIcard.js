import './SMIcard.scss';
import { motion } from 'framer-motion';
import withCursor from "../../HOCs/withCursor";


const SMIcard = ({title, description, picture, tags, link, ...props}) => {
  const { onCursor } = props.context;


  return (
    <motion.div className    = "smicard" 
                onMouseEnter = {() => {onCursor('eye')}}
                onMouseLeave = {onCursor}>
        <a href         = {link}
           target       = "_blank" 
           rel          = "noreferrer" 
           className    = 'smicard__link'>
             <img src = {picture} 
               alt = {title} 
               className = "smicard__img"/>
        </a>

        <h3 className = 'smicard__title'>
          <a href        = {link} 
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


export default withCursor(SMIcard);

