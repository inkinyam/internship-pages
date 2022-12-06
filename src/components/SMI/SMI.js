import './SMI.scss';
import Title from '../Title/Title';

const SMI = ({onCursorCardEnter, onCursorDefault}) => {
  const onCardHoverCursor = () => {
    onCursorCardEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }


  return (
    <section className='smi'>
      <Title title='Сми о стажировке'></Title>
     
      <div className='smi__cards'>
        <div className='smi__card' onMouseEnter={onCardHoverCursor} onMouseLeave={onCursorLeave}>privet</div>
      </div>
    </section>
  )
}

export default SMI;