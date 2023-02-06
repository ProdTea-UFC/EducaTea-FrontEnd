import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss';
import activityIcon from "../../images/activity-button.png"
import storesIcon from "../../images/stores-button-icon.png"
import consultancyIcon from "../../images/consultancy-button-icon.png"
import informationIcon from "../../images/information-button-icon.png"
export default function Footer() {
    return (
      <div className={styles.navigationContainer}>
        <Link className={styles.activityButton} to='/activities'>
          <img src={activityIcon} alt="culture icon"></img>
          <p>Atividades</p>
        </Link>
      </div>
    )
}
