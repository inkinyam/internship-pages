import './Programs.scss';
import Title from '../Title/Title';
import Program from './Program';

import { programsData } from '../../utils/cardInfo';

const Programs = ({onCursorButtonEnter, onCursorDefault}) => {
  
  const onButtonHoverCursor = () => {
    onCursorButtonEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }
  return (
  <>
    <section className='programs'>
    <Title title='Программы 2023'></Title>

    <div className='programs__cards'>
          {
            programsData.map(item => {
              return (
                <Program key          = {item.id}
                         title        = {item.title}
                         curator      = {item.curator}
                         curatorPhoto = {item.curatorPhoto} 
                         curatorInfo  = {item.curatorInfo} 
                         description  = {item.description} 
                         result       = {item.result} 
                         onCursorButtonEnter = {onButtonHoverCursor} 
                         onCursorDefault = {onCursorLeave}
                         />
              )
            })
          }
        </div>

    </section>
  </>
  )
}

export default Programs;
