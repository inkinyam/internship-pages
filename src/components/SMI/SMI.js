import './SMI.scss';
import Title from '../Title/Title';
import SMIcard from './SMIcard';
import { DragSlider } from '../Drag-slider/Drag-slider';
import { SMICardData } from '../../utils/cardInfo';




const SMI = () => {

  return (
    <section className='smi'>
      <Title title='Сми о стажировке'></Title>
   
        <DragSlider>
        { SMICardData.map(card => {    
          return  ( 
              <SMIcard  key               = {card.id}
                        title             = {card.title}
                        description       = {card.description}
                        picture           = {card.image}
                        tags              = {card.tags}
                        link              = {card.link}
              />)
            })
        }
        </DragSlider>


    </section>
  )
}

export default SMI;


