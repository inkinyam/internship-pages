import "./Phases.scss";
import Title from "../Title/Title";

const Phases = () => {
  return (
    <section className="phases">
        <Title title='Этапы подачи заявок и старт программ'> </Title>

      <div className="phases__cards">
        <div className="phases__card phases_active">
          <div className="phases__dot-box">
            <div className="phases__dot"></div>
          </div>
          <h3 className="phases__title">До 6 июня</h3>
          <p className="phases__description">Прием заявок от участников на конкурс портфолио</p>
        </div>

        <div className="phases__card">
          <div className="phases__dot-box">
            <div className="phases__dot"></div>
          </div>
          <h3 className="phases__title">До 15 июня</h3>
          <p className="phases__description">Объявление итогов конкурса портфолио</p>
        </div>

        <div className="phases__card">
          <div className="phases__dot-box">
            <div className="phases__dot"></div>
          </div>
          <h3 className="phases__title">До 13 июля</h3>
          <p className="phases__description">Старт программ стажировок</p>
        </div>

        <div className="phases__card">
          <div className="phases__dot-box">
            <div className="phases__dot"></div>
          </div>
          <h3 className="phases__title">1До 26 августа</h3>
          <p className="phases__description">Итоговая защита проектов</p>
        </div>

        <div className="phases__card">
          <div className="phases__dot-box">
            <div className="phases__dot"></div>
          </div>
          <h3 className="phases__title">2До 26 августа</h3>
          <p className="phases__description">Итоговая защита проектов</p>
        </div>

        <div className="phases__card">
          <div className="phases__dot-box">
            <div className="phases__dot"></div>
          </div>
          <h3 className="phases__title">3До 26 августа</h3>
          <p className="phases__description">Итоговая защита проектов</p>
        </div>
      </div>
    </section>
  )
}

export default Phases;