import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from './style.module.scss';

export default function ActivitiesPage({ navbar, logo, header }) {
  const { mockActivitiesData, activities } = useContext(AppContext)

    return (
      <div className={styles.contentContainer}>
          <Header 
            logo={ logo }
            mockActivitiesData = { mockActivitiesData }
            text='Qual atividade esta procurando?'
            header={ header }
          />
        <div className={styles.activitiesContainer}>
          {activities && activities.map((activities, index) => (
            <Link
              to={`/activities/activity-details`}
              state={ [{...activities}] }
              key={ index }
            >
              <div className={styles.activitiesCard}>
                <div className={styles.activitiesImageContainer}>
                  <img
                    src={ activities.img }
                    alt={ activities.name }
                    width='70px'
                  />
                </div>
                <hr/>
                <div className={styles.activitiesNameContainer}>
                  <h4>{ activities.name }</h4>
                </div>
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
