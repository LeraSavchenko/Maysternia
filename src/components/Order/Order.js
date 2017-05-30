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
import s from './Order.css';

class Order extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2>Виготовимо наступний шедевр разом</h2>
          <h6>Зв'яжіться з нами та дізнайтесь більше</h6>
          <div className={s.survey}>
            <input type="text" placeholder="Ім'я"></input>
            <input type="text" placeholder="Телефон"></input>
            <input type="text" placeholder="E-mail"></input>
            <textarea rows="3" placeholder="Ваша ідея або питання"></textarea>
            <button className={s.button}>Зв'язатись</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Order);
