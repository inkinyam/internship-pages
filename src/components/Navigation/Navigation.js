import "./Navigation.scss";
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';




const Navigation = ({onCursorButtonEnter, onCursorDefault}) => {


  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }


  return (
    <section className="navigation">
      <div className="navigation__container">
        <a href='https://genplanmos.ru/' target="_blank" rel="noreferrer" className="navigation__logo " onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> 
          <img src={logo} alt="логотип"/>
        </a>
        <nav className="navigation__list">
        <Link to="about"     smooth={true}  className='navigation__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Как проходит</Link> 
        <Link to="phases"    smooth={true}  className='navigation__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Сроки и этапы</Link> 
        <Link to="howItWas"  smooth={true}  className='navigation__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Стажировка 2022</Link> 
        <Link to="howItWas"  smooth={true}  className='navigation__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Стажировка 2021</Link> 
        <Link to="programs"  smooth={true}  className='navigation__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Программы</Link> 
      </nav>
      </div>
    </section>
  )
}

export default Navigation;