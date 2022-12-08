import "./Navbar.scss";
import React from "react";
import { Link } from 'react-scroll';

import logo from '../../images/logo.svg';

const NavBar = ({onCursorButtonEnter, onCursorDefault}) => {
const [isMovileMenuStation, setMobileMenuStation] = React.useState(false);
let mobileMenuClassList = isMovileMenuStation? "navbar__mobile  navbar__mobile_active" : "navbar__mobile";

  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }


  const handleBurgerClick = () => {
    setMobileMenuStation(!isMovileMenuStation);
  }

  return ( 
    <div className='navbar'>
      <nav className="navbar__list">
        <Link to="about"     smooth={true}  className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Как проходит</Link> 
        <Link to="phases"    smooth={true}  className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Сроки и этапы</Link> 
        <Link to="howItWas"  smooth={true}  className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Стажировка 2022</Link> 
        <Link to="howItWas"  smooth={true}  className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Стажировка 2021</Link> 
        <Link to="#programm" smooth={true}  className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Программы</Link> 
      </nav>

      <div className={mobileMenuClassList}>
        <Link to='genplanmos.ru' className="navbar__logo" onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> 
          <img src={logo} alt="логотип"/>
        </Link>
        
        <button className="navbar__burger" onClick={handleBurgerClick} onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>
          <span className="line top"></span>
          <span className="line bottom"></span>
        </button>

        <nav className="navbar__mobile-menu">
          <div className="navbar__mobile-list">
            <Link to="about"    className='navbar__link'>Как проходит</Link> 
            <Link to="phases"   className='navbar__link'>Сроки и этапы</Link> 
            <Link to="howItWas" className='navbar__link'>Стажировка 2022</Link> 
            <Link to="howItWas" className='navbar__link'>2021</Link> 
            <Link to="#programm" className='navbar__link'>Программы</Link> 
          </div>

          <div className="navbar__mobile-list">
            <Link to="#" className='navbar__link'>Telegram</Link> 
            <Link to="#" className='navbar__link'>Vkontakte</Link> 
          </div>
        </nav>
      </div>
    </div>

)
}


export default NavBar;
