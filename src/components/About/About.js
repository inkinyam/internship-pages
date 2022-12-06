import './About.scss';
import Title from '../Title/Title';
import CardList from '../CardList/CardList';
import SmileyBackground from '../SmileyBackground/SmileyBackground';

const About = () => {
  const datacard = [
    { id: 1,
      title: 'Кого ждем',
      description: 'Ждем студентов специальностей: Архитектор, Инженер, Экономист, Социолог, Эколог, Аналитик, ГИС-специалист, Урбанист.',
      image: ''
    },
    { id: 2,
      title: 'работаем оффлайн',
      description: 'Принимаем студентов, живущих в Москве или готовых приезжать на очные встречи. Обычно за это время мы проводим 3-4 очных мероприятия, не более одного раза в неделю. ',
      image: ''
    },
    { id: 3,
      title: 'Когда и как',
      description: 'Принимаем студентов, живущих в Москве или готовых приезжать на очные встречи. В зависимости от программы практика рассчитана на 1-2 месяца. Обычно за это время мы проводим 3-4 очных мероприятия, не более одного раза в неделю.',
      image: ''
    },
    { id: 4,
      title: 'Формат работы',
      description: 'Обсуждаем проекты, участвуем в натурных исследованиях, встречаемся на мозговых штурмах. А в конце организуем большую защиту со всеми участниками. В зависимости от программы практика рассчитана на 1-2 месяца. ',
      image: ''
    }
  ];
  
  return (
    <section className='about'>
      <Title title='Как проходит'> </Title>
      <CardList cardData ={datacard}
                order = {true}/>

      <SmileyBackground />

    </section>
  )
}

export default About;