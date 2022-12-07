import './Form.scss';
import Title from '../Title/Title';

const Form = () => {
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
                   type="text"/>

            <input className='form__input' 
                   placeholder='фамилия'
                   type="text"/>
            <span className='form__label'> ,</span>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> мой вуз</span>
            <input className='form__input' 
                    placeholder='назавание вуза, например, МАРХИ'
                    type="text"/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> изучаю специальность</span>
            <input className='form__input' 
                   placeholder='специальность, например, архитектура'
                   type="text"/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> год обучения</span>
            <input className='form__input' 
                   placeholder='год обучения, например, третий'
                   type="text"/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'> контакты для обратной связи</span>
            <input className='form__input' 
                   placeholder='e-mail'
                   type="email"/>
          </fieldset>

          <fieldset className='form__line'>
            <span className='form__label'>мое портфолио</span>
            <input className='form__input' 
                   placeholder='ссылка на портфолио'
                   type="email"/>
            <span className='form__label'>прошу рассмотреть мою кандидатуру</span>       
          </fieldset>
          <button type="submit"></button>
        </form>
      </div>

    </section> 
  )
}

export default Form;