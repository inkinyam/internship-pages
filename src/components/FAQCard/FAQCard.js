import './FAQCard.scss';
import React from 'react';
import { motion } from 'framer-motion';

const FAQCard = ({question, answer, onCursorCardEnter, onCursorDefault}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const onCardHoverCursor = () => {
   isOpen ? onCursorDefault(): onCursorCardEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  return (
  <motion.div className = 'faq__card '
              animate   = {isOpen ? "open" : "closed"}
              onClick = {() => {setIsOpen(!isOpen)}}
              onMouseEnter={onCardHoverCursor} 
              onMouseLeave={onCursorLeave}>

    <h4 className='faq__title '>{question}</h4>

    <motion.div className = 'faq_text' 
                variants={{
                  open: {
                    height: 'auto',
                    marginTop: 16,
                    marginBottom: 16, 
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05
                    }
                  },
                  closed: {
                    margin: 0,
                    height: 0,
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3
                    }
                  }
                }}
               >
               {answer}
    </motion.div>
  </motion.div>
  )
}

export default FAQCard;