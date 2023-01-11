import './Form.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useInputValidator } from '../../utils/customHooks/useInputValidator';
import { useInView } from "react-intersection-observer";
import withCursor from "../../HOCs/withCursor";

const Form = ({onSubmit, ...props}) => {
  const { onCursor } = props.context;

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });


  
  const [isValid, setIsValid]     = React.useState(true);
  const inputControl              = useInputValidator();
  const { name, surname, institute, speciality, year, email, portfolioLink } = inputControl.errors;

  React.useEffect(() => {
    setIsValid(inputControl.isValid)
  }, [ inputControl.isValid]);


  const handleSubmitForm = (e) => {
    e.preventDefault();
 /*    onSubmit(); */
  }


  const envelopeClassList = inView? 'form__svg animated': 'form__svg';

  return ( 
    <section className='form'>

  
      <div className='form__layout'>
        <div className='form__bg'></div>
      </div>
      
      <svg ref={ref} className={envelopeClassList} viewBox="0 0 1312 675" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path  d="M1 1H1311M1 1V674H1311V1M1 1L656 134L1311 1"> </path>
      </svg>


      <div className='form__container'>
        <form className='form__form' noValidate>
          <h4 className='form__title'>Подать заявку на практику</h4>
          <fieldset className='form__fieldset'>
            <span className='form__text'>Я,</span>
            <label htmlFor='name' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.name && "form__input_error"}`}
                     placeholder='имя'
                     type="text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.name || ''}
                     onChange    = {inputControl.handleChange}
                     name        = "name"
                     id          = "name"
                     onMouseEnter = {() => {onCursor('pensil')}}
                     onMouseLeave = {onCursor}/>
              <span className={`form__err ${inputControl?.errors?.name && "form__err_show"}`}>{name}</span>
            </label>
        
            <label htmlFor='surname' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.surname && "form__input_error"}`}
                     placeholder = 'фамилия'
                     type        = "text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.surname|| ''}
                     onChange    = {inputControl.handleChange}
                     name        = "surname"
                     id          = "surname"
                     onMouseEnter = {() => {onCursor('pensil')}}
                     onMouseLeave = {onCursor}/>
              <span className = {`form__err ${inputControl?.errors?.surname && "form__err_show"}`}>{surname}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'> мой вуз</span>
            <label htmlFor='institute' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.institute && "form__input_error"}`}
                      placeholder ='например, МАРХИ'
                      type        ="text"
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                      value       = {inputControl?.values?.institute || '' }
                      onChange    = {inputControl.handleChange}
                      name        = "institute"
                      id          = "institute"
                      onMouseEnter = {() => {onCursor('pensil')}}
                      onMouseLeave = {onCursor}/>
              <span className={`form__err ${inputControl?.errors?.institute && "form__err_show"}`}>{institute}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>изучаю специальность</span>
            <label htmlFor='speciality' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.speciality && "form__input_error"}`}
                    placeholder ='например, архитектура'
                    type        ="text"
                    minLength   = "2" 
                    maxLength   = "255" 
                    required 
                    pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                    value       = {inputControl?.values?.speciality || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "speciality"
                    id          = "speciality"
                    onMouseEnter = {() => {onCursor('pensil')}}
                    onMouseLeave = {onCursor}/>
              <span className={`form__err ${inputControl?.errors?.speciality && "form__err_show"}`}>{speciality}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>курс</span>
            <label htmlFor='year' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.year && "form__input_error"}`}
                    placeholder ='например, 2'
                    type        ="text"
                    minLength   = "1" 
                    maxLength   = "5" 
                    required 
                    pattern     = "[1-9]+"
                    value       = {inputControl?.values?.year || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "year"
                    id          = "year"
                    onMouseEnter = {() => {onCursor('pensil')}}
                    onMouseLeave = {onCursor}/>
              <span className={`form__err ${inputControl?.errors?.year && "form__err_show"}`}>{year}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>контакты для обратной связи</span>
            <label htmlFor='email' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.email && "form__input_error"}`}
                    placeholder ='e-mail'
                    type        ="email"
                    minLength   = "2" 
                    maxLength   = "255" 
                    required 
                    pattern     = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    value       = {inputControl?.values?.email || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "email"
                    id          = "email"
                    onMouseEnter = {() => {onCursor('pensil')}}
                    onMouseLeave = {onCursor}/>
              <span className={`form__err ${inputControl?.errors?.email && "form__err_show"}`}>{email}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>мое портфолио</span>
            <label htmlFor='portfolioLink' className='form__label'>
              <input className = {`form__input ${inputControl?.errors?.portfolioLink && "form__input_error"}`}
                    placeholder ='ссылка на портфолио'
                    type        ="text"
                    minLength   = "2" 
                    maxLength   = "255" 
                    required 
                  /*   pattern     = "/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi" */
                    value       = {inputControl?.values?.portfolioLink  || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "portfolioLink"
                    id          = "portfolioLink"
                    onMouseEnter = {() => {onCursor('pensil')}}
                    onMouseLeave = {onCursor}/>
              <span className = {`form__err ${inputControl?.errors?.portfolioLink && "form__err_show"}`}>{portfolioLink}</span>
            </label>
          </fieldset>

          <motion.button type         = "submit"  
                         className    = {`form__button ${(!isValid && 'form__button_disabled')}`}
                         onSubmit     = {handleSubmitForm}
                         onMouseEnter = {() => {onCursor('big')}}
                         onMouseLeave = {onCursor}
                       /*   disabled     = {!isValid ?? 'disabled'} */  />
        </form>
      </div>

    </section> 
  )
}

export default withCursor(Form);