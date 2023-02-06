import React, { useContext } from 'react';
import Navbar from '../../components/navbar/';
import Header from '../../components/header/';
import storeIcon from '../../images/store-512.png'
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

export default function Stores({ navbar, logo, header }) {
  const { setStoreName, stores } = useContext(AppContext)

  const getName = (storeName) => {
    setStoreName(storeName)
  }

    return (
      <div>
        <div className='container-content'>
          <Header logo={ logo } header/>
          Lojas
        </div>
        {stores && stores.map((store) => (
          <div key={ store.address }>
            <Link
              state={ [store.products, store.storeName] }
              to={`/stores/store`}
              onClick={ () => getName(store.storeName) }
            >
              <img src={ storeIcon } alt='icone da loja' width='60px' />
              <h4>{store.storeName}</h4>
              <h5>{store.address}</h5>
            </Link>
          </div>
        ))}
        {navbar &&
          <Navbar />
        }
      </div>
    )
}
