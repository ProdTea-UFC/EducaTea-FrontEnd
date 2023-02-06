import React, { useContext } from 'react'
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import { useLocation, Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import styles from './style.module.scss'

export default function ActivityeDetails({ navbar, logo, header }) {
  const { detailsActivity } = useContext(AppContext);
  const location = useLocation();
  const { state } = location;
  const { img, name } = state[0];
  
    return (
      <div className={styles.contentContainer}>
        <div>
          <Header logo={ logo } detailsActivity={ state[0] } header/>
        </div>
        <img src={ img } alt={ name } width='170px'/>
        <h3>Atividades do tema: {name}</h3>
        <div className={styles.activityCardContainer}>
          {detailsActivity && detailsActivity.map((activity, index) => (
            <Link
              to={`/activities/`}
              state={ [activity, img] }
              key={ index }
            >
              <div className={styles.activityCard}>
                <ul>
                  <li>
                    { activity.name }
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
        {navbar &&
          <Navbar />
        }
      </div>
    )
}
