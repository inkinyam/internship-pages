import './FAQ.scss';
import React from 'react';
import Title from '../Title/Title';
import FAQCard from '../FAQCard/FAQCard';


import { FAQCardData } from '../../utils/cardInfo';

const FAQ = ({onCursorCardEnter, onCursorDefault}) => {
 
  return (
    <section className='faq'>
      <Title title='F.A.Q. (Ответы на часто задаваемые вопросы)'></Title>
        <div className='faq__cards'>
          {
            FAQCardData.map(item => {
              return (
                <FAQCard key      = {item.id}
                         question = {item.question}
                         answer   = {item.answer} 
                         onCursorCardEnter = {onCursorCardEnter} 
                         onCursorDefault  = {onCursorDefault}/>
              )
            })
          }
        </div>
    </section>
    
  )
}


export default FAQ;