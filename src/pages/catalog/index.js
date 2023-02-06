import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import { useLocation } from 'react-router';
import AppContext from '../../context/AppContext';

export default function Catalog({ logo, navbar, header }) {
  const { mockStoresData, filtredStoreProducts, filterProductsFromStores } = useContext(AppContext)
  const location = useLocation();
  const { state, pathname } = location;
  useEffect(() => {
    if(pathname === '/catalog'){
      mockStoresData.filter((store) => (
        Object.keys(store).includes('products')
        ? filterProductsFromStores(store.storeName, store.products) : false
    ))}
  }, [mockStoresData, pathname, state])
  return (
    <div>
      <div className='container-content'>
        <Header logo={logo} header={ header}/>
        Catalogo
      </div>
      {pathname === '/stores/store' && state[0].map((product) => (
        <div key={product.price}>
          <h4>{state[1]}</h4>
          <h4>{product.productName}</h4>
          <h5>R${product.price}</h5>
          <h5>Risco de Toxicidade:{product.toxicRisk}</h5>
        </div>
      ))}
      {pathname === '/catalog' && filtredStoreProducts.map((store) => store.filter((product) => product.productName === state[0].productName || typeof product == 'string'))
      .map((e, index) => (
        <div key={ index }>
          <h4>{e[1]}</h4>
          <h4>{e[0].productName}</h4>
          <h5>R${e[0].price}</h5>
          <h5>Risco de Toxicidade:{e[0].toxicRisk}</h5>
        </div>
      ))}
      {navbar &&
        <Navbar />
      }
    </div>
  )
}
