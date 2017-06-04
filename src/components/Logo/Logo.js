import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Logo.css';


const Logo = () =>
  (
    <div>
      <div className={s.blockstyle}>
        <div className={s.center}>
          <img src="./logo.png" alt="logo.png" />
        </div>
      </div>
    </div>
    );


export default withStyles(s)(Logo);
