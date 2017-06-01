import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

class About extends React.Component {
  render() {
    return (
      <div className={s.blockstyle}>
       
        <img className={s.aboutImage} src="./about.png" alt="about.png" />
        
        <div className={s.textblock}>
          <h1 className={s.grey}>Про нас</h1>
      
          <p>Майстерня - це місце, де ваша ідея реалізовується з натурального каменю Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер`єрів.</p>

          <p>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація.</p>

          <p>Найважливіше для нас - ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання.</p>

          <div className={s.inline}>
            <a href="#" className={s.link}><div className={s.underlined}>Детальніше</div></a>

            <a href="#" className={s.link}><div className={s.underlined}>Переглянути деталі</div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default(About);
