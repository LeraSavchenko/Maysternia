import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import LanguageSwitcher from '../LanguageSwitcher';

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

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <FormattedMessage {...messages.brand} />
          </Link>
      
          <div className={s.contacts}>
            <FormattedMessage {...messages.contactsPhone} /><br />
            <span className={s.contactsMessage}><FormattedMessage {...messages.contactsMessage} /></span> 
          </div>
      
          <Link className={s.contactButton} to="/">
            <div className={s.button}>
              <FormattedMessage {...messages.contactButton} />   
            </div>
          </Link>
       
          <span className={s.lang}><LanguageSwitcher /></span>
      
          <Link className={s.hamburger} to="/">
            <div className={s.hamburgerBar}></div>
            <div className={s.hamburgerBar}></div>
            <div className={s.hamburgerBar}></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);