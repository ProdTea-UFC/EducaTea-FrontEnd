import React from 'react'
import Navbar from '../../components/navbar';

export default function Menu({ navbar, logo }) {
    return (
      <div>
        <div className='container-content'>
          <img src={ logo } alt='Logo' width='170px'/>
          Menu
        </div>
        <p>Premium</p>
        <p>Salvos</p>
        <a href="https://instagram.com/fito.frut?igshid=YmMyMTA2M2Y="
          target='_blank' rel="noreferrer"
        >
          <p>Instagram</p>
        </a>
        <p>FeedBack</p>
        <p>Sobre o App</p>

        <p>Contato para parcerias:</p>
        <a href="email:fitofrutsjc@gmail.com">
          <p>fitofrutsjc@gmail.com</p>
        </a>
        {navbar &&
            <Navbar />
          }
      </div>
    )
}
