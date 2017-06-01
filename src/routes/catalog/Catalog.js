/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import About from '../../components/About/About';
import Header from '../../components/Header/Header';

class Catalog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Header />
          <h1>{this.props.title}</h1>
      
          <div className={s.topic}>
            <p className={s.title}>Внутрішнє та зовнішнє оздоблення</p>
            <div className={s.divider}></div>
          </div>
      
          <div className={s.topic}>
            <p className={s.title}>Складні архітектурні вироби</p>
            <div className={s.divider}></div>
          </div>
      
          <div className={s.topic}>
            <p className={s.title}className={s.title}>Садово-паркове мистецтво</p>
            <div className={s.divider}></div>
          </div>
      
          <About />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);
