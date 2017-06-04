import React from 'react';
import s from './About.css';


class About extends React.Component {
  render() {
    return (
      <div style={s.blockstyle}>
        <div>
          <img style={{ maxHeight: '100%' }}src="./about.jpg" alt="about.png" />
        </div>
        <div style={s.textblock}>
          <h1 style={s.grey}>Про нас</h1>
          <p style={{ paddingBottom: '10px' }}>Майстерня - це місце, де ваша ідея реалізовується з натурального каменю Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтерєрів </p>
          <p style={{ paddingBottom: '10px' }}>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація </p>
          <p style={{ paddingBottom: '10px' }}>Найважливіше для нас - ваше естетичне задоволення, тож ми гарантуємо якість нашої роботита дотримання термінів виконання </p>
          <div style={s.inline}>
            <a href="#" style={s.link}><div style={s.underlined}>Детальніше</div></a>
            <a href="#" style={s.link}><div style={s.underlined}>Переглянути деталі</div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default(About);
