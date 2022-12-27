import "./Phases.scss";
import Title from "../Title/Title";
import Slider from '../Slider/Slider';
import { useInView } from "react-intersection-observer";

const Phases = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const cardsClassList = inView? 'phases__cards animated': 'phases__cards';

  return (
    <section className="phases">

      <div className='phases__layout'>
          <div className='phases__bg'></div>
      </div>

      <div className="phases__content">
        <Title title='Этапы подачи заявок и старт программ'> </Title>



        <div ref={ref} className={cardsClassList}>
        <svg  className='phases__svg'  viewBox="0 0 1303 192" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 1H1238C1273.35 1 1302 29.6538 1302 65V127C1302 162.346 1273.35 191 1238 191H0" />
        </svg>
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
        <Slider autoPlay      = {false}
                autoPlayTime  = {5000}
                width         = {'100%'}
                height        = {'100%'} />
      </div>

    </section>
  )
}

export default Phases;