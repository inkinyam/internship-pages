import './Lead.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const Lead = ({onCursorButtonEnter, onCursorDefault}) => {


const onButtonHoverCursor = () => {
  onCursorButtonEnter();
}

const onCursorLeave = () => {
  onCursorDefault();
}

  return (
    <section className='lead' >
      <Navigation isFixed = { false }
                  onCursorButtonEnter = {onCursorButtonEnter} 
                  onCursorDefault = {onCursorDefault}
        />
      <div className='lead__bg'>
        <div className='lead__big'></div>
        <div className='lead__middle r1'></div>
        <div className='lead__middle r2'></div>
        <div className='lead__middle r3'></div>
        <div className='lead__middle r4'></div>
        <div className='lead__small'></div>
      </div>
      <div className='lead__content'>
        
          <div className='lead__title'>
            <h1>Практика</h1> 
            <span>
              <p>в&nbsp;Институте</p>
              <p>Генплана</p>   
              <p>Москвы <Link to="/form" className='lead__button' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> Заполнить заявку</Link></p>
            </span>
          </div>
          

      
        <div className="lead__startpoint"></div>


        <div className='lead__infoblock'>
          <p className='lead__info'>ждем студентов, изучающих специальности:</p>
          <p className='lead__prof'>Архитектор, Инженер, Экономист, Социолог, Эколог, Аналитик, ГИС-специалист, Урбанист</p>
        </div>

      </div>


     
    </section>
  )
}

export default Lead;