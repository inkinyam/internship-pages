import { Link } from 'react-router-dom';
import  logo from '../../images/logo/logo.svg';
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link target="_blank" rel="noreferrer" to="https://genplanmos.ru/">
          <img src={logo} alt='Логотип' className='header__logo'/>
        </Link>
      

        <section className='header__nav'>
          <Link className='header__link' to='#' rel="noreferrer">Институт</Link>
          <Link className='header__link' to='#' rel="noreferrer">Проекты</Link>
          <Link className='header__link' to='#' rel="noreferrer">Услуги</Link>
          <Link className='header__link' to='#' rel="noreferrer">Журнал</Link>
          <Link className='header__link' to='#' rel="noreferrer">Контакты</Link>
          <button className='header__link-group'>Спецпроекты <i className='bi bi-chevron-down'></i></button>
        </section>

        <button className='header__search'>
          <i className='bi bi-search'></i>
        </button>
      </div>  
      
      
      
    </header>
    
  )
}

export default Header;