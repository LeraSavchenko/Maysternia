import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ThreeGallery.css';

import arch1Url from '../images/arch1.png';
import arch2Url from '../images/arch2.png';
import arch3Url from '../images/arch3.png';

class ThreeGallery extends React.Component {

  render() {
    return (
      <div className={s.archImages}>
        <img src={arch1Url} alt="architecture" />
        <img src={arch2Url} alt="architecture" />
        <img src={arch3Url} alt="architecture" />
      </div>
    );
  }
}

export default withStyles(s)(ThreeGallery);