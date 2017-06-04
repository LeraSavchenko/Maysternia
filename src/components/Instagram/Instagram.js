import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Instagram.css';
import Link from '../Link';

const firstline = [
  {
    tags:'#onyx #m-selection',
    image: './onyx.jpg',
  },
  {
    tags: '#3d #randomy',
    image: './randomy.jpg',
  },
  {
    tags:'#onyx #m-selection',
    image: './onyx.jpg',
  },
];

const secondline = [
  {
    tags:'#onyx #m-selection',
    image: './onyx.jpg',
  },
  {
    tags:'#onyx #m-selection',
    image: './onyx.jpg',
  },
  {
    tags:'#onyx #m-selection',
    image: './onyx.jpg',
  },
];


const Title = () =>
  (
    <div className={s.forTitle}>
      <h1>Краще один раз подивитись</h1>
      <p>Фото проектів з нашого <b>instagram</b></p>
    </div>
  );

const Gallery = () =>
  (<div className={s.gallery}>
    <div className={s.inLine}>
      {
        firstline.map(elem =>
          <div className={s.forGallery}>
            <img src={elem.image} alt={elem.image} href="/" />
            <p >{elem.tags}</p>
          </div>
        )
      }
    </div>
    <div className={s.inLine}>
      {
        secondline.map(elem =>
          <div className={s.forGallery}>
            <img src={elem.image} alt={elem.image} href="/" />
            <p >{elem.tags}</p>
          </div>
        )
      }
      </div>
      <div className={s.forButton}>
        <Link className={s.contactButton} to="/catalog">
          <div className={s.button}>
            Всі проекти
          </div>
        </Link>
      </div>
    </div>
  );

const Instagram = () =>
  (
    <div className={s.instagram}>
      <Title />
      <Gallery />
    </div>
  );


export default withStyles(s)(Instagram);
