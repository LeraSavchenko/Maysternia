import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import mapUrl from './map.png';

const Links = [
  {
    to: '/catalog',
    name: 'Каталог продукції'
  },
  {
    to: '/',
    name: 'Про нас'
  },
  {
    to: '/',
    name: 'Наші роботи'
  },
]

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}><img className={s.mapImage} src={mapUrl} alt="map" />
      
          <div className={s.contents}>
            <h3>Контакти</h3>
            <p>+38 066 445 59 00<br />
            <span className={s.address}>м. Мукачево, вул. Переяславська, 1</span></p>
      
            {
              Links.map(elem =>
                <Link className={s.link} to={elem.to}>
                  <div className={s.underlined}>{elem.name}</div>
                </Link>
              )
            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
