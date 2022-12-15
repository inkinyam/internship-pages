import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <p className="notFound__text">Я ничего не нашел! </p>

        <Link to="/" className="notFound__stepBack">Вернуться на главную</Link>
      </section>
    </>
  )
}

export default NotFound;