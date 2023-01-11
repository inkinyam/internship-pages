import './Programs.scss';
import Title from '../Title/Title';
import Program from './Program';

import { ProgramsData } from '../../utils/cardInfo';

const Programs = () => {
  
  return (
  <>
    <section className='programs'>
    <Title title='Программы 2023'></Title>

    <div className='programs__cards'>
          {
            ProgramsData.map(item => {
              return (
                <Program key          = {item.id}
                         title        = {item.title}
                         curator      = {item.curator}
                         curatorPhoto = {item.curatorPhoto} 
                         curatorInfo  = {item.curatorInfo} 
                         description  = {item.description} 
                         result       = {item.result} 
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
