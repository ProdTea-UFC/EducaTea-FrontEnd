import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext'
import styles from "./style.module.scss"
import logo from "../../images/educatea-logo.png"

export default function Login() {
  const { setInfosLogin, disableButton, setDisableButton, loginInfo } = useContext(AppContext)
  const getInfosLogin = ({target}) => {
    const { name, value } = target
    if (name === 'indentify' && value.includes('@')) {
      setInfosLogin({
        email: value,
        userName: '',
      })

    } else if ( name === 'indentify' ) {
      setInfosLogin({
        userName: value
      })
    } else {
      setInfosLogin({
        password: value
      })
    }
  }

  useEffect(() =>{
    const { email, userName, password } = loginInfo
    if ((email !== '' && password !== '') || (userName !== '' && password !== '') ) {
      setDisableButton(false)
    }
  }, [loginInfo, setDisableButton])

  return (
    <div className={styles.contentContainer}>
      <div className={styles.imgContainer}>
        <img src={logo} alt='logo fito frut'/>
      </div>
      <div className={styles.inputsContainer}>
        <input
          type="text"
          name='indentify'
          placeholder='E-mail ou Nome de Usuário'
          onChange={ getInfosLogin }
        />
        <input
          type="text"
          name='password'
          placeholder='Senha'
          onChange={ getInfosLogin }
        />
        <Link to='/activities'>
          <button className={styles.button}
            type='button'
            disabled={ disableButton }
          >
            Entrar
          </button>
        </Link>
        <div>
          <span>ou <a className={styles.anchorLink} href='/'>cadastre-se</a></span>
        </div>
      </div>
      <span className={styles.circle}>
      </span>
    </div>
  )
}
