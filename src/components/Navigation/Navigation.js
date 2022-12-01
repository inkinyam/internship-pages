import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";
import logo from '../../images/logo.svg'
const Navigation = ({isFixed}) => {

  const navigationClassNames = isFixed ? 'navigation navigation_color_black' : 'navigation navigation_color_white';
  const linkClassNames = ({isActive}) => isActive ? 'navigation__link  navigation__link_active' : 'navigation__link';

  return (
    <section className={navigationClassNames}>
      <div className="navigation__container">
        <Link to='genplanmos.ru' className="navigation__logo "> 
          <img src={logo} alt="логотип"/>
        </Link>
        <nav className="navigation__list">
          <NavLink to="/about" className={linkClassNames}>Как проходит</NavLink> 
          <NavLink to="/lead" className={linkClassNames}>Для кого</NavLink> 
          <NavLink to="/phases" className={linkClassNames}>Сроки и этапы</NavLink> 
          <NavLink to="/howitwas" className={linkClassNames}>Стажировка 2021</NavLink> 
          <NavLink to="/howitwas" className={linkClassNames}>Стажировка 2022</NavLink> 
          <NavLink to="/programm" className={linkClassNames}>Программы</NavLink> 
        </nav>
      </div>
    </section>
  )
}

export default Navigation;