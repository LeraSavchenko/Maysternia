import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FiveGallery.css';

import Link from '../../../components/Link/Link';

import decor1Url from '../images/decor1.png';
import decor2Url from '../images/decor2.png';
import decor3Url from '../images/decor3.png';
import decor4Url from '../images/decor4.png';
import decor5Url from '../images/decor5.png';

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

class FiveGallery extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.navigation}>
          <p>Вид каменю:</p>
            {
              Nav.map(elem => 
                <Link to="/catalog" activeStyle={{ color: 'darkred' }}>{elem.text}</Link>
              )
            }
        </div>
        <div className={s.decorImages}>
            <img className={s.decorGroup} src={decor1Url} alt="decor" />
              
            <div className={s.decorGroup}>
              <img src={decor2Url} alt="decor" className={s.imgMargin} />
              <img src={decor3Url} alt="decor" />
            </div>

            <div className={s.decorGroup}>
              <img src={decor4Url} alt="decor" className={s.imgMargin} />
              <img src={decor5Url} alt="decor" />
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FiveGallery);