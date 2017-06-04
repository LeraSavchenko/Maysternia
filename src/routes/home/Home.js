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


import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import newsQuery from './news.graphql';
import s from './Home.css';
import Navigation from '../../components/Navigation/Navigation'
import Order from '../../components/Order/Order';
import Logo from '../../components/Logo/Logo';
import About from '../../components/About/About';
import Catalog from '../../components/Catalog/Catalog';
import Instagram from '../../components/Instagram/Instagram';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      })),
    }).isRequired,
  };


  render() {
    const { data: { } } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Logo />
          <Navigation />
          <Catalog />
          <About />
          <Instagram />
          <Order />
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  graphql(newsQuery),
)(Home);
