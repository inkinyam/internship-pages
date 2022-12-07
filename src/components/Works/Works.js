import './Works.scss';
import Title from '../Title/Title';
import CardList from '../CardList/CardList';

const Works = () => {
  const datacardWorks = [
    { id: 1-1,
      title: 'Возможности развития Московской агломерации в ТиНАО',
      description: 'Над проектом работали: Анастасия Данилюк, Данил Петренко, Мария Ожерельева, Александра Козловская, Ирина Чульжанова, Денис Тетюшкин, Артемий Круглов',
      image: 'https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    },
    { id: 2,
      title: 'Города в городе. Новая Субурбия',
      description: 'Над проектом работали: Видергольд О.Г., Подольская А.А., Семенова У.Н., Кучук Р.Г.',
      image: 'https://images.unsplash.com/photo-1670252166693-a7b3f2bee132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    { id: 3,
      title: 'Вороновское - опытное поле ТиНАО',
      description: 'Лысенко Катерина Стажировка в Институте Генплана Москвы Лето 2022',
      image: 'https://images.unsplash.com/photo-1670261140885-30ae06e26b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
    },
    { id: 4,
      title: 'Рассказовка. новые центры притяжения в Новой москве',
      description: 'Над проектом работали: Емельяненко Катя, Никитина Евгения, Ахметзянова Дина, Македонский Даниил, Хазбулатова Алина, Пан Григорий, Шуляк Екатерина, Василевский Тихон, Дьяченко Дмитрий, Труфакина Олеся, Тулиганов Эмиль.',
      image: 'https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
  ];
  
  return (
    <section className='works'>
      <Title title='Работы студентов'> </Title>
      <CardList cardData ={datacardWorks}
                order = {false}/>
    </section>
  )
}

export default Works;