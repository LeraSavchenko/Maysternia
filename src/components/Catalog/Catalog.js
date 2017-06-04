import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';

import s from './Catalog.css';


const Catalog = () =>
  (
    <div >
      <h1 className={s.headerincatalog}>
        Каталог продукції
      </h1>
      <div className={s.catalog}>
      <div className={s.inLine}>
        <div className={s.pharagraphs}>
          <div>
            <p className={s.title}>Внутрішнє та зовнішнє оздоблення</p>
            <p className={s.title}>Складні архітектурні вироби</p>
            <p className={s.title}>Садово-паркове мистецтво</p>
          </div>
          <div>
            <Link className={s.contactButton} to="/catalog">
              <div className={s.button}>
                 Каталог продукції
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className={s.linewithsmallphotos}>
            <img src="./firstingallery.jpg" alt="firstingallery" href="/" />
          </div>
          <Link className={s.link} to='/catalog'>
            <div className={s.underlined}>Портрети</div>
          </Link>
        </div>
        <div>
          <div className={s.linewithsmallphotos}>
            <img src="./secondingallery.jpg" alt="secondingallery" href="/" />
          </div>
          <Link className={s.link} to='/catalog'>
            <div className={s.underlined}> Скульптури </div>
          </Link>
        </div>
      </div>
      <div className={s.inLine}>
        <div>
          <div className={s.linewithbigphotos}>
            <img src="./thirdingallery.jpg" alt="thirdingallery" href="/" />
          </div>
          <Link className={s.link} to='/catalog'>
            <div className={s.underlined}>Каміни</div>
          </Link>
        </div>
        <div>
          <div className={s.linewithbigphotos}>
            <img src="./fourthingallery.jpg" alt="fourthingallery" href="/" />
          </div>
          <Link className={s.link} to='/catalog'>
            <div className={s.underlined}>Столешні</div>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );

export default withStyles(s)(Catalog);
