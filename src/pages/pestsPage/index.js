import React, { useContext } from 'react';
import Navbar from '../../components/navbar/';
import Header from '../../components/header';
import { useLocation, Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import styles from './style.module.scss'

export default function PestPage({ navbar, logo, icon, header }) {
  const { archivesPests } = useContext(AppContext);
  const location = useLocation();
  const { state } = location;
  const { name, treatment, description, products } = state[0]

    return (
      <div className={styles.contentContainer}>
        <Header logo={ logo } treamentArchives={ treatment } header/>
        <img src={ state[1] } alt={ name } width='170px'/>
        <h3>{name}</h3>
        <div className={styles.descriptionContainer}>
          <h4>Descrição:</h4>
          <p>{description}</p>
        </div>
        <div className={styles.treatmentContainer}>
          {archivesPests && archivesPests.map((treament, index) => (
            <div key={ index } >
              <ul>
                <div className={styles.treatmentCard}>
                  <li>{treament.name}</li>
                  <a href={ icon } download>
                    <img src={ icon } alt='iconDownload' width='20px'/>
                  </a>
                </div>
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.productTitlesContainer}>
          <h3>Produtos Recomendados</h3>
          <p>Selecione o produto e veja na loja próxima</p>
        </div>
        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <Link
              to='/catalog'
              state={ [product] }
              key={ index }
            >
              <div>
                <ul>
                  <li>{product.productName}</li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
        {navbar &&
          <Navbar />}
      </div>
    )
}
