import "./AboutUs.scss";

import SmileyBackground from "../SmileyBackground/SmileyBackground";

const AboutUs = ({onCursorButtonEnter, onCursorDefault}) => {

  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  return (
  <section className="aboutUs">
      <p className="aboutUs__text">Разрабатываем генеральные планы, проекты планировки, нормативы и градостроительную документацию по всей России. Раз в год проводим стажировку для студентов.</p>
      <a className="aboutUs__button" href="#form" onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> Заполнить заявку</a>
      <SmileyBackground/>
  </section>
  )


}

export default AboutUs;