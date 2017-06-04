import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Summary.css';
import Link from '../Link';

const Links = [
  {
    to: '/catalog',
    name: 'Каталог продукції',
  },
  {
    to: '/',
    name: 'Про нас',
  },
  {
    to: '/catalog',
    name: 'Наші роботи',
  },
];

const Summary = () =>
  (
    <div>
      <div className={s.forSummary}>
        <div className={s.info}>
          <img src="./forSummary.png" href="/" alt="forSummary" />
          <div className={s.contents}>
            <h3>Контакти</h3>
            <p>+38 066 445 59 00<br />
              <span className={s.address}>м. Мукачево, вул. Переяславська, 1</span></p>
          </div>
        </div>
        {
          Links.map(elem =>
            <Link className={s.link} to={elem.to}>
              <div className={s.underlined}>{elem.name}</div>
            </Link>
          )
        }
      </div>
      <Link className={s.contactButton} to="/">
        <div className={s.button}>
          Зв'язатись з нами
        </div>
      </Link>
    </div>
  );

export default withStyles(s)(Summary);
