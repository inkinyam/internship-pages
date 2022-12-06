import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({onCursorButtonEnter, onCursorDefault}) => {
  const [isOpenedNavBar, setIsOpenedNavbar] = React.useState(true);

  const navBarClassList = isOpenedNavBar ? 'navbar navbar_active' : 'navbar';

  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  const handleBurgerClick = () => {
    setIsOpenedNavbar(!isOpenedNavBar);
  }

  return ( 
    <div className={navBarClassList}>
      <nav className="navbar__list">
        <Link to="#about"    className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Как проходит</Link> 
        <Link to="#phases"   className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Сроки и этапы</Link> 
        <Link to="#howitwas" className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Стажировка 2022</Link> 
        <Link to="#howitwas" className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Стажировка 2021</Link> 
        <Link to="#programm" className='navbar__link' onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}>Программы</Link> 
      </nav>
      <button className="navbar__burger" onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave} onClick={handleBurgerClick}>
        <span className="line top"></span>
        <span className="line bottom"></span>
      </button>
    </div>

)
}


export default NavBar;
