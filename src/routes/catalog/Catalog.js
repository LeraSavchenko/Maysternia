import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import About from '../../components/About/About';
import Order from '../../components/Order/Order';
import Header from '../../components/Header/Header';

import Navigation from './navigation/Navigation';
import FiveGallery from './fiveGallery/FiveGallery';
import ThreeGallery from './threeGallery/ThreeGallery';

import gardeningUrl from './images/gardening.png';

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
          
          <Navigation />
          <FiveGallery />
            
          <div className={s.topic}>
            <p className={s.title}>Складні архітектурні вироби</p>
            <div className={s.divider}></div>
          </div>

          <ThreeGallery />
              
          <div className={s.topic}>
            <p className={s.title}>Садово-паркове мистецтво</p>
            <div className={s.divider}></div>
          </div>
      
          <img className={s.gardeningImg} src={gardeningUrl} alt="gardening stones" />
      
          <About />
          <Order />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);
