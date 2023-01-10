import { Link } from 'react-scroll';
import './Program.scss';
import { useInView } from "react-intersection-observer";

const Program = ({title, curator, curatorPhoto, curatorInfo, description, result, onCursorButtonEnter, onCursorDefault}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }

  const programClassList = inView? 'program animated': 'program';

  return (
  <div className={programClassList} ref={ref}>
      <h4 className="program__title">{title}</h4>

      <div className="program__card">
        <div className="program__curatorInfo">
          <img className="program__curatorPhoto" src={curatorPhoto} alt={curator}/>
          <div className="program__curatorName">
            <p className="program__curator">{curator}</p>
            <span className="program__tag">Куратор программы</span>
          </div>
          <p className="program__curatorJob">{curatorInfo}</p>
        </div>
        <div className="program__info">
        <span className="program__tag">Описание программы</span>
          <p className="program__description">{description}</p>
          <p className="program__result">{result}</p>
          <Link  to="form"  
                 smooth={true}  
                 className="program__button"
                 onMouseEnter={onButtonHoverCursor} 
                 onMouseLeave={onCursorLeave}>
                 Заполнить заявку</Link>
        </div>
        
      </div>
  </div>
  )
}

export default Program;