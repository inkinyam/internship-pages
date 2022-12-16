import './FAQCard.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const FAQCard = ({question, answer, onCursorCardEnter, onCursorDefault}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const onCardHoverCursor = () => {
   isOpen ? onCursorDefault(): onCursorCardEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }
 
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const FAQcardClassList = inView? 'faq__card animated' : 'faq__card '

  return (
  <motion.div ref={ref} className = {FAQcardClassList}
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