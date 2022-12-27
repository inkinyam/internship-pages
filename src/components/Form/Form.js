import './Form.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useInputValidator } from '../../utils/customHooks/useInputValidator';

const Form = ({onCursorButtonEnter, onCursorInputEnter, onCursorDefault, onSubmit}) => {
  const [isValid, setIsValid]     = React.useState(false);
  const inputControl              = useInputValidator();
  const { name, surname, institute, speciality, year, email, portfolioLink } = inputControl.errors;


  React.useEffect(() => {
    setIsValid(inputControl.isValid)
  }, [ inputControl.isValid]);


  const handleSubmitForm = () => {
    onSubmit();
  }



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
      
      <svg className='form__svg' viewBox="0 0 1312 675" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1 1H1311M1 1V674H1311V1M1 1L656 134L1311 1" stroke="black"/>
      </svg>


      <div className='form__container'>

        <form className='form__form'>
          <h4 className='form__title'>Подать заявку на практику</h4>
          <fieldset className='form__fieldset'>
            <span className='form__text'>Я,</span>
            <label htmlFor='name' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.name && "form__input_error"}`}
                     placeholder='имя'
                     type="text"
                     onMouseEnter={onInputHoverCursor} 
                     onMouseLeave={onCursorLeave}
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.name}
                     onChange    = {inputControl.handleChange}
                     id          = "name"/>
              <span className={`form__err ${inputControl?.errors?.name && "form__err_show"}`}>{name}</span>
            </label>
        
            <label htmlFor='surname' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.surname && "form__input_error"}`}
                     placeholder = 'фамилия'
                     type        = "text"
                     onMouseEnter= {onInputHoverCursor} 
                     onMouseLeave= {onCursorLeave}
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.surname}
                     onChange    = {inputControl.handleChange}
                     id          = "surname"/>
              <span className = {`form__err ${inputControl?.errors?.surname && "form__err_show"}`}>{surname}</span>
            </label>
            </fieldset>

            <fieldset className='form__fieldset'>
              <span className='form__text'> мой вуз</span>
              <label htmlFor='institute' className='form__label'>
                <input className={`form__input ${inputControl?.errors?.institute && "form__input_error"}`}
                      placeholder ='например, МАРХИ'
                      type        ="text"
                      onMouseEnter={onInputHoverCursor} 
                      onMouseLeave={onCursorLeave}
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё1-9\s-]"
                      value       = {inputControl?.values?.surname }
                      onChange    = {inputControl.handleChange}
                      id          = "institute"/>
                <span className={`form__err ${inputControl?.errors?.institute && "form__err_show"}`}>{institute}</span>
              </label>
            </fieldset>

            <fieldset className='form__fieldset'>
              <span className='form__text'>изучаю специальность</span>
              <label htmlFor='speciality' className='form__label'>
                <input className={`form__input ${inputControl?.errors?.speciality && "form__input_error"}`}
                      placeholder ='например, архитектура'
                      type        ="text"
                      onMouseEnter={onInputHoverCursor} 
                      onMouseLeave={onCursorLeave}
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё1-9\s-]"
                      value       = {inputControl?.values?.surname}
                      onChange    = {inputControl.handleChange}
                      id          = "speciality"/>
                <span className={`form__err ${inputControl?.errors?.speciality && "form__err_show"}`}>{speciality}</span>
              </label>
            </fieldset>

            <fieldset className='form__fieldset'>
              <span className='form__text'>год обучения</span>
              <label htmlFor='year' className='form__label'>
                <input className={`form__input ${inputControl?.errors?.year && "form__input_error"}`}
                      placeholder ='например, архитектура'
                      type        ="text"
                      onMouseEnter={onInputHoverCursor} 
                      onMouseLeave={onCursorLeave}
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё1-9\s-]"
                      value       = {inputControl?.values?.surname}
                      onChange    = {inputControl.handleChange}
                      id          = "year"/>
                <span className={`form__err ${inputControl?.errors?.year && "form__err_show"}`}>{year}</span>
              </label>
            </fieldset>

            <fieldset className='form__fieldset'>
              <span className='form__text'>контакты для обратной связи</span>
              <label htmlFor='email' className='form__label'>
                <input className={`form__input ${inputControl?.errors?.email && "form__input_error"}`}
                      placeholder ='e-mail'
                      type        ="email"
                      onMouseEnter={onInputHoverCursor} 
                      onMouseLeave={onCursorLeave}
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё1-9\s-]"
                      value       = {inputControl?.values?.email}
                      onChange    = {inputControl.handleChange}
                      id          = "email"/>
                <span className={`form__err ${inputControl?.errors?.email && "form__err_show"}`}>{email}</span>
              </label>
            </fieldset>

            <fieldset className='form__fieldset'>
              <span className='form__text'>мое портфолио</span>
              <label htmlFor='portfolioLink' className='form__label'>
                <input className = {`form__input ${inputControl?.errors?.portfolioLink && "form__input_error"}`}
                      placeholder ='ссылка на портфолио'
                      type        ="text"
                      onMouseEnter={onInputHoverCursor} 
                      onMouseLeave={onCursorLeave}
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё1-9\s-]"
                      value       = {inputControl?.values?.portfolioLink }
                      onChange    = {inputControl.handleChange}
                      id          = "portfolioLink"/>
                <span className = {`form__err ${inputControl?.errors?.portfolioLink && "form__err_show"}`}>{portfolioLink}</span>
              </label>
            </fieldset>

          <motion.button type         = "submit"  
                         whileTap     = {{ scale: 0.97 }}
                         className    = {`form__button ${(!isValid && 'form__button_disabled')}`}
                         onMouseEnter = {onButtonHoverCursor} 
                         onMouseLeave = {onCursorLeave}
                         onSubmit     = {handleSubmitForm}
                        />
        </form>
      </div>

    </section> 
  )
}

export default Form;