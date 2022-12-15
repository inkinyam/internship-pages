import './SMI.scss';
import Title from '../Title/Title';
import SMIcard from './SMIcard';



const SMI = ({onCursorCardEnter, onCursorDefault}) => {

  const SMIdata = [
    { id: 1,
      title: 'ARCHI.RU',
      description: 'Летняя практика Института Генплана была посвящена Новой Москве. Всего получилось 4 проекта с совершенно разной оптикой: от масштаба агломерации до вполне конкретных предложений, которые можно было, обдумав, и реализовать. Рассказываем обо всех.',
      image: 'https://images.unsplash.com/photo-1530104091755-015d31dfa0b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80',
      tags: 'стажировка 2021',
      link: 'https://yandex.ru/'
    },

    { id: 2,
      title: 'Stroi.mos',
      description: 'Институт Генплана Москвы приглашает студентов на летнюю стажировку и практику, сообщила председатель Москомархитектуры Юлиана Княжевская.',
      image: 'https://images.unsplash.com/photo-1514923995763-768e52f5af87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      tags: 'стажировка 2022',
      link: 'https://yandex.ru/'
    },

    { id: 3,
      title: 'ARCHI.RU',
      description: 'Этим летом Институт Генплана Москвы при поддержке Москомархитектуры провел стажировку-воркшоп для студентов и молодых архитекторов в новом расширенном формате. Задачей было предложить свежий взгляд на несколько территорий города, рассматриваемых сейчас специалистами института. Дипломами наградили четыре проекта, гран-при получил «самый запоминающийся».',
      image: 'https://images.unsplash.com/photo-1529244927325-b3ef2247b9fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tags: 'стажировка 2022',
      link: 'https://yandex.ru/'
    },

    { id: 4,
      title: 'вечерняя москва',
      description: 'Институт Генплана Москвы объявил о старте набора на летнюю стажировку и практику для столичных студентов. Об этом в четверг, 7 апреля, сообщили в пресс-службе Комитета по архитектуре и градостроительству Москвы (Москомархитектура).',
      image: 'https://images.unsplash.com/photo-1479750178258-aec5879046ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
      tags: 'стажировка 2021',
      link: 'https://yandex.ru/'
    },

    { id: 5,
      title: 'ARCHI.RU',
      description: 'Летняя практика Института Генплана была посвящена Новой Москве. Всего получилось 4 проекта с совершенно разной оптикой: от масштаба агломерации до вполне конкретных предложений, которые можно было, обдумав, и реализовать. Рассказываем обо всех.',
      image: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      tags: 'стажировка 2021',
      link: 'https://yandex.ru/'
    },

    { id: 6,
      title: 'вечерняя москва',
      description: 'Институт Генплана Москвы объявил о старте набора на летнюю стажировку и практику для столичных студентов. Об этом в четверг, 7 апреля, сообщили в пресс-службе Комитета по архитектуре и градостроительству Москвы (Москомархитектура).',
      image: 'https://images.unsplash.com/photo-1616043986676-c0ac934f2b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      tags: 'стажировка 2021',
      link: 'https://yandex.ru/'
    }
  ]


  return (
    <section className='smi'>
      <Title title='Сми о стажировке'></Title>
     
      <div className='smi__cards' >

       {SMIdata.map(card => {    
        return  ( 
            <SMIcard  key     = {card.id}
                  title    = {card.title}
                  description = {card.description}
                  picture     = {card.image}
                  tags        = {card.tags}
                  link        = {card.link}
                  onCursorCardEnter = {onCursorCardEnter} 
                  onCursorDefault  = {onCursorDefault}
                  
            />)
        })
       }

      </div>
   
    </section>
  )
}

export default SMI;


