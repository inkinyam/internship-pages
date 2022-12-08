import './Form.scss';
import { motion } from 'framer-motion';

const Form = ({onCursorButtonEnter, onCursorInputEnter, onCursorDefault}) => {


  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onInputHoverCursor = () => {
    onCursorInputEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  return ( 
    <section className='form'>
      <div className='form__layout'>
        <div className='form__bg'></div>
      </div>

      <div className='form__container'>

        <form className='form__form'>
          <h4 className='form__title'>Подать заявку на практику</h4>
          <fieldset className='form__line'>
            <span className='form__label'> Я,</span>
            <input className='form__input' 
                   placeholder='имя'
                   type="text"
                   onMouseEnter={onInputHoverCursor} 
                   onMouseLeave={onCursorLeave}/>

            <input className='form__input' 
                   placeholder='фамилия'
                   type="text"
                   onMouseEnter={onInputHoverCursor} 
                   onMouseLeave={onCursorLeave}/>
            <span className='form__label'> ,</span>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> мой вуз</span>
            <input className='form__input' 
                    placeholder='назавание вуза, например, МАРХИ'
                    type="text"
                    onMouseEnter={onInputHoverCursor} 
                    onMouseLeave={onCursorLeave}/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> изучаю специальность</span>
            <input className='form__input' 
                   placeholder='специальность, например, архитектура'
                   type="text"
                   onMouseEnter={onInputHoverCursor} 
                   onMouseLeave={onCursorLeave}/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> год обучения</span>
            <input className='form__input' 
                   placeholder='год обучения, например, третий'
                   type="text"   
                   onMouseEnter={onInputHoverCursor} 
                   onMouseLeave={onCursorLeave}/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> контакты для обратной связи</span>
            <input className='form__input' 
                   placeholder='e-mail'
                   type="email"
                   onMouseEnter={onInputHoverCursor} 
                   onMouseLeave={onCursorLeave}/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'>мое портфолио</span>
            <input className='form__input' 
                   placeholder='ссылка'
                   type="text"
                   onMouseEnter={onInputHoverCursor} 
                   onMouseLeave={onCursorLeave}/>
            <span className='form__label'>прошу рассмотреть мою кандидатуру</span>       
          </fieldset>
          <motion.button type="submit"  
                         whileTap={{ scale: 0.97 }}
                         className='form__button'
                         onMouseEnter={onButtonHoverCursor} 
                         onMouseLeave={onCursorLeave} />
        </form>
      </div>

    </section> 
  )
}

export default Form;