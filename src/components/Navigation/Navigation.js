import "./Navigation.scss";
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import withCursor from "../../HOCs/withCursor";



const Navigation = props => {
  const { onCursor } = props.context;
  
 return (
    <section className = "navigation">
      <div className = "navigation__container">
        <a href      = 'https://genplanmos.ru/' 
           target    = "_blank" 
           rel       = "noreferrer" 
           className = "navigation__logo"
           onMouseEnter = {() => onCursor('big')} 
           onMouseLeave = {onCursor} > 
             <img src={logo} alt="логотип"/>
        </a>
        <nav className="navigation__list">
        <Link to="about"     smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Как проходит</Link> 
        <Link to="phases"    smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Сроки и этапы</Link> 
        <Link to="howItWas"  smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Стажировка 2022</Link> 
        <Link to="howItWas"  smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Стажировка 2021</Link> 
        <Link to="programs"  smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Программы</Link> 
      </nav>
      </div>
    </section>
  )
}

export default withCursor(Navigation);