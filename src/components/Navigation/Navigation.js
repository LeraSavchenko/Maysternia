import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { defineMessages, FormattedMessage } from 'react-intl';
import s from './Navigation.css';
import Link from '../Link';
import LanguageSwitcher from '../LanguageSwitcher';

const Links = [
  {
    to: '/catalog',
    name: 'Каталог продукції'
  },
  {
    to: '/',
    name: 'Про нас'
  },
  {
    to: '/catalog',
    name: 'Наші роботи'
  },
];

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Майстерня',
  },
  contactsPhone: {
    id: 'header.contacts.phone',
    defaultMessage: '+38 066 445 59 00',
  },
  contactsMessage: {
    id: 'header.contacts.message',
    defaultMessage: 'Доставка по Україні',
  },
  contactButton: {
    id: 'header.contact.button',
    defaultMessage: 'Зв\'язатись з нами',
  },
});

const Tagline = () =>
  (
    <div className={s.forTagline}>
      <img src="./backgroundImage.png" href="/" alt="backgroundImage" className={s.withImage} />
      <div className={s.inRowWithoutPadding}>
        <span className={s.lang}><LanguageSwitcher /></span>
        <Link className={s.contactButton} to="/">
          <div className={s.button}>
            <FormattedMessage {...messages.contactButton} />
          </div>
        </Link>
      </div>
    </div>
  );

const Summary = () =>
  (
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
  );

const Logo = () =>
  (
    <div className={s.inRow}>
      <Tagline />
      <Summary />
    </div>
  );


export default withStyles(s)(Logo);
