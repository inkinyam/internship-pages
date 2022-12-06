import './Slider.scss';
import sliderTitle from '../../images/works1.png';

const Slider = () => {
  return (
  <section className='slider'>
    тут будет слайдер
    <img src={sliderTitle} alt ='img' className='slider__img'/>
  </section>
  )

}

export default Slider;