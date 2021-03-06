/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contacts.css';
import Link from '../Link';
import mapUrl from './map.png';

class Contacts extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <img className={s.mapImage} src={mapUrl} alt="map" />
      
          <div className={s.contents}>
            <h3>Контакти</h3>
            <p>+38 066 445 59 00<br />
            <span className={s.address}>м. Мукачево, вул. Переяславська, 1</span></p>
      
            
            <a className={s.link} to="/">
              <div className={s.underlined}>Каталог продукції</div>
            </a>
      
            <a className={s.link} to="/">
              <div className={s.underlined}>Про нас</div>
            </a>
      
            <a className={s.link} to="/">
              <div className={s.underlined}>Наші роботи</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contacts);
