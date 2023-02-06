import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import AppContext from '../../context/AppContext';
import styles from './style.module.scss';
import searchIcon from "../../images/IconSearch.svg"

export default function Header({ logo, mockActivitiesData, detailsActivity, treamentArchives, text, header }) {
  const {
    searchInput, setSearchInput,
    setActivities, setDetailsActivity,
    setArchivesPests, mockStoresData,
    setStores
  } = useContext(AppContext)
  const location = useLocation();
  const { pathname } = location

  useEffect(() => {
    switch (pathname) {
      case '/activities':
        if (searchInput === '') {
          setActivities(mockActivitiesData)
        } else {
          const filterActivitie = mockActivitiesData.filter((activitie) => (
            activitie.name.toLowerCase().includes(searchInput) ? activitie : false
          ));
          setActivities(filterActivitie)
        }
        break;
      case '/activities/activity-details':
        if (searchInput === '') {
          setDetailsActivity(detailsActivity.activities)
        } else {
          const filterCulture = detailsActivity.pests.filter((pest) => (
            pest.name.toLowerCase().includes(searchInput) ? pest : false
          ));
          setDetailsActivity(filterCulture)
        }
        break;
      case '/activities/activity-details/pests':
        if (searchInput === '') {
          setArchivesPests(treamentArchives)
        } else {
          const filterCulture = treamentArchives.filter((archive) => (
            archive.name.toLowerCase().includes(searchInput) ? archive : false
          ));
          setArchivesPests(filterCulture)
        }
        break;
      case '/catalog':
        console.log('entrei catalog');
        break;
      case '/stores':
        if (searchInput === '') {
          setStores(mockStoresData)
        } else {
          const filterCulture = mockStoresData.filter((store) => (
            store.storeName.toLowerCase().includes(searchInput) ? store : false
          ));
          setStores(filterCulture)
        }
        break;
      case '/stores/store':
        console.log('entrei store');
        break;
      default:
        break;
    }
  }, [detailsActivity, mockActivitiesData,
    mockStoresData, pathname,
    searchInput, setArchivesPests,
    setActivities, setDetailsActivity,
    setStores, treamentArchives])

  const getInputValue = ({ target }) => {
    setSearchInput(target.value)
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <img src={logo} alt='Logo' width='170px' />
      </div>
      <p>{text}</p>
        {header && 
        <div className={styles.inputSearchContainer}>
          <input
          className={styles.inputSearch}
          type='text'
          name='search'
          placeholder='Pesquisar'
          onChange={getInputValue}
          />
          <img src={searchIcon} alt="icon search"></img>
        </div>
        }
    </div>
  )
}
