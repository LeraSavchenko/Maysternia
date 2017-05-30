import React from 'react';


const blockstyle = {
  width: '100%',
  color: 'black',
  height: '600px',
  display: 'flex',
  alignContent: 'center',
};
const textblock = {
  paddingLeft: '20px',
  flexGrow: '1',
  overflow: 'auto',
};
const inline = {
  display: 'flex',
};
const link = {
  textDecoration: 'none',
  paddingRight: '20px',
};
const underlined = {
  borderBottom: '2px solid grey',
};
const grey = {
  color: 'grey',
};

class About extends React.Component {
  render() {
    return (
      <div style={blockstyle}>
        <div>
          <img src="./about.jpg" alt="about.png" />
        </div>
        <div style={textblock}>
          <h1 style={grey}>Про нас</h1>
          <p>Майстерня - це місце, де ваша ідея реалізовується з натурального каменю Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтерєрів </p>
          <p>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація </p>
          <p>Найважливіше для нас - ваше естетичне задоволення, тож ми гарантуємо якість нашої роботита дотримання термінів виконання </p>
          <div style={inline}>
            <a href="#"style={link}><div style={underlined}>Детальніше</div></a>
            <a href="#"style={link}><div style={underlined}>Переглянути деталі</div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default(About);
