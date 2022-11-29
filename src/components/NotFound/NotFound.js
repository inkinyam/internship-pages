import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <p className="notFound__text">Я ничего не нашел! </p>

        <Link to="/" className="notFound__stepBack">Вернуться на главную</Link>
      </div>
    </>
  )
}

export default NotFound;