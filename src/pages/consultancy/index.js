import React, { useContext } from 'react';
import Navbar from '../../components/navbar/';
import Header from '../../components/header';
import AppContext from '../../context/AppContext';

export default function Consultancy({ navbar, logo }) {
  const {formValues, setFormInfos, setFormValues} = useContext(AppContext)

  const { name, address, culture, problem } = formValues;

  const msg = `Olá eu sou ${name} da seguinte localidade: ${address}
  Trabalho atualmente com a cultura: ${culture}.
  estou enfretando o seguinte problema: ${problem}.
  Poderia me ajudar?`

  const enconde = encodeURI(msg)

  const getValuesFromForm = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
          setFormInfos({
            name: value
          })
        break;
      case 'address':
        setFormInfos({
          address: value
        })
        break;
      case 'culture':
        setFormInfos({
          culture: value
        })
        break;
      case 'problem':
        setFormInfos({
          problem: value
        })
        break;
      default:
        break;
    }
  }

    return (
      <div>
        <div className='container-content'>
          <Header logo={logo} />
          Consultoria
        </div>
        <form>
          <input
            type='text'
            name='name'
            placeholder='Qual seu nome?'
            onChange={ getValuesFromForm }
          />
          <input
            type='text'
            name='address'
            placeholder='Qual sua localidade?'
            onChange={ getValuesFromForm }
          />
          <input
            type='text'
            name='culture'
            placeholder='Com que cultura trabalha?'
            onChange={ getValuesFromForm }
          />
          <input
            type='text'
            name='problem'
            placeholder='Que problema esta enfretando?'
            onChange={ getValuesFromForm }
          />
          <a href={`https://wa.me/558899473978?text=${enconde}`}
            target='_blank' rel="noreferrer"
          >
            <input
              type='button'
              value='Enviar para Whatsapp'
              onClick={ () => setFormValues({
                name: '',
                address: '',
                culture: '',
                problem: '',
              })}
            />
          </a>
        </form>
        {navbar &&
            <Navbar />
          }
      </div>
    )
}