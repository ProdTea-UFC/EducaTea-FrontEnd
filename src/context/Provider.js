import React, { useState, useEffect } from 'react'
import AppContext from './AppContext';
import mockActivities from '../mockData/mockActivities';
import mockStores from '../mockData/mockStores';
import { useLocation } from 'react-router';

export default function Context({children}) {
  const location = useLocation();
  const { pathname } = location;
  const [filtredStoreProducts, setFiltredStoreProducts] = useState([]);
  const [activities, setActivities] = useState([]);
  const [detailsActivity, setDetailsActivity] = useState([]);
  const [archivesPests, setArchivesPests ] = useState();
  const [stores, setStores] = useState();
  const [storeName, setStoreName] = useState();
  const [mockActivitiesData, setMockActivitiesData] = useState(mockActivities);
  const [mockStoresData, setMockStoresData] = useState(mockStores);
  console.log(filtredStoreProducts);
  const [productName, setProductName] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [searchInput, setSearchInput] = useState('')
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    culture: '',
    problem: '',
  })
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    userName: '',
    password: '',
  });

  const setInfosLogin = (info) => {
    setLoginInfo((prevState) => ({
      ...prevState, ...info
    }))
  }

  const setFormInfos = (info) => {
    setFormValues((prevState) => ({
      ...prevState, ...info
    }))
  }

  const filterProductsFromStores = (storeName, products) => {
    setFiltredStoreProducts((prevState) => ([
      ...prevState, [
      ...products, storeName
      ]
  ]))
  }

  useEffect(() => {
    if(pathname !== '/catalog') {
      setFiltredStoreProducts([])
    }
  }, [pathname])

  const obj = {
    formValues, setFormInfos,
    filterProductsFromStores,
    filtredStoreProducts, setFiltredStoreProducts,
    stores, setStores,
    archivesPests, setArchivesPests,
    detailsActivity, setDetailsActivity,
    activities, setActivities,
    searchInput, setSearchInput,
    storeName,setStoreName,
    mockStoresData,
    mockActivitiesData,
    productName, setProductName,
    loginInfo, setLoginInfo, setInfosLogin,
    disableButton, setDisableButton,
  };

    return (
      <AppContext.Provider value={ obj } >
        {children}
      </AppContext.Provider>
    )
}
