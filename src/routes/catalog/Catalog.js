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
import gardeningUrl from './gardening.png';
import arch1Url from './arch1.png';
import arch2Url from './arch2.png';
import arch3Url from './arch3.png';
import decor1Url from './decor1.png';
import decor2Url from './decor2.png';
import decor3Url from './decor3.png';
import decor4Url from './decor4.png';
import decor5Url from './decor5.png';

const Nav = [
  {
    text: "мармур"
  },
  {
    text: "граніт"
  },
  {
    text: "пісковик"
  },
  {
    text: "вапняк"
  },
  {
    text: "кварцит"
  },
  {
    text: "онікс"
  },
]


class Catalog extends React.Component {

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
          
          <div className={s.navigation}>
            <p>Вид каменю:</p>
            {
              Nav.map(elem => 
                <a href="">{elem.text}</a>
              )
            }
          </div>
      
          <div className={s.decorImages}>
            <img className={s.decorGroup} src={decor1Url} alt="decor" />
            <div className={s.decorGroup}>
              <img src={decor2Url} alt="decor" style={{marginBottom: "12px"}} />
              <img src={decor3Url} alt="decor" />
            </div>
            <div className={s.decorGroup}>
              <img src={decor4Url} alt="decor" style={{marginBottom: "12px"}} />
              <img src={decor5Url} alt="decor" />
            </div>
          </div>
      
          <div className={s.topic}>
            <p className={s.title}>Складні архітектурні вироби</p>
            <div className={s.divider}></div>
          </div>
      
          <div className={s.archImages}>
            <img src={arch1Url} alt="architecture" />
            <img src={arch2Url} alt="architecture" />
            <img src={arch3Url} alt="architecture" />
          </div>
      
          <div className={s.topic}>
            <p className={s.title}>Садово-паркове мистецтво</p>
            <div className={s.divider}></div>
          </div>
      
          <img className={s.gardeningImg} src={gardeningUrl} alt="gardening stones" />
      
          <About />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);
