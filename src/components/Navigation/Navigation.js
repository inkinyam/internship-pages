import "./Navigation.scss";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

import NavBar from "../Navbar/Navbar";


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
        <Link to='genplanmos.ru' className="navigation__logo " onMouseEnter={onButtonHoverCursor} onMouseLeave={onCursorLeave}> 
          <img src={logo} alt="логотип"/>
        </Link>
       <NavBar onCursorButtonEnter = {onCursorButtonEnter} 
               onCursorDefault     = {onCursorDefault}/>
      </div>
    </section>
  )
}

export default Navigation;