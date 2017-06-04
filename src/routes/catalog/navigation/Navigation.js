import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';

import Link from '../../../components/Link/Link';

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

class Navigation extends React.Component {

  render() {
    return (
        <div className={s.navigation}>
          <p>Вид каменю:</p>
            {
              Nav.map(elem => 
                <Link to="/catalog" activeStyle={{ color: 'darkred' }}>{elem.text}</Link>
              )
            }
        </div>
    );
  }
}

export default withStyles(s)(Navigation);