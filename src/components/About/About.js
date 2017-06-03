import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';
import s from './About.css';
import aboutUrl from './about.png';

const Paragraph = [
  {
    text: "Майстерня - це місце, де ваша ідея реалізовується з натурального каменю Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів."
  },
  {
    text: "Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація."
  },
  {
    text: "Найважливіше для нас - ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання."
  },
]

const Buttons = [
  {
    name: 'Детальніше'
  },
  {
    name: 'Переглянути деталі'
  },
]

class About extends React.Component {
  render() {
    return (
      <div className={s.blockstyle}>
       
        <img className={s.aboutImage} src={aboutUrl} alt="sculpture" />
        
        <div className={s.textblock}>
          <h1 className={s.grey}>Про нас</h1>
          {
            Paragraph.map(elem => 
              <p>{elem.text}</p>
            )
          }

          <div className={s.inline}>
            {
              Buttons.map(elem =>
                <Link to="/catalog" className={s.link}><div className={s.underlined}>{elem.name}</div></Link>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
