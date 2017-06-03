import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Order.css';

const Input = [
  {
    placeholder: "Ім'я"
  },
  {
    placeholder: "Телефон"
  },
  {
    placeholder: "E-mail"
  },
]

class Order extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2>Виготовимо наступний шедевр разом</h2>
          <h6>Зв'яжіться з нами та дізнайтесь більше</h6>
      
          <form className={s.survey}>
            {
              Input.map(elem =>
                <input type="text" placeholder={elem.placeholder} />
              )
            }
            <textarea rows="3" placeholder="Ваша ідея або питання"></textarea>
            <button className={s.button}>Зв'язатись</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Order);