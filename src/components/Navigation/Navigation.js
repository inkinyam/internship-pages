import "./Navigation.scss";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

import NavBar from "../Navbar/Navbar";


const Navigation = ({isFixed, onCursorButtonEnter, onCursorDefault}) => {


  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }


  const navigationClassNames = isFixed ? 'navigation navigation_color_black' : 'navigation navigation_color_white';


  return (
    <section className={navigationClassNames}>
      <div className="navigation__container">
        <Link to='genplanmos.ru' className="navigation__logo " onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> 
          <img src={logo} alt="логотип"/>
        </Link>
       <NavBar onCursorButtonEnter = {onCursorButtonEnter} 
               onCursorDefault = {onCursorDefault}/>
      </div>
    </section>
  )
}

export default Navigation;