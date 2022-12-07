import "./AboutUs.scss";

import SmileyBackground from "../SmileyBackground/SmileyBackground";

const AboutUs = ({onCursorButtonEnter, onCursorDefault, isAnimated, isHasButton}) => {

  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  const buttonClassList = isHasButton? "aboutUs__button" :"aboutUs__button aboutUs__button_hide"; 

  return (
  <section className="aboutUs">
      <p className="aboutUs__text">Разрабатываем генеральные планы, проекты планировки, нормативы и градостроительную документацию по всей России. Раз в год проводим стажировку для студентов.</p>
      <a className={buttonClassList} href="#form" onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> Заполнить заявку</a>
      { isAnimated? <SmileyBackground/>: ''}
  </section>
  )


}

export default AboutUs;