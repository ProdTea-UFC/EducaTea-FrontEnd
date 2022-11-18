import React from 'react'
import { Card } from '../components/Card/Card'
import { Link } from 'react-router-dom'
export const Home = () => {

    return (
        <div className='flex-center-column gap-sm test h-full'>
            <h1 className='title'> Bem vindo!!</h1>
            <Card >
                <p className=' my-md font-default'>orem ipsum nunc primiskj suscipit dictumst, sociosqu vehicula morbi fermentumf litora, facilisis tristiquedwgj  consectetur cubilia. </p>
            </Card>
            <Link className='color-gray-400 logo'to={{ pathname:'/',state: { fromDashboard: true }}} > <button className='button-solid-md px-lg font-micro'>Login</button></Link>
            <Link className='color-gray-400 logo'to={{ pathname:'/',state: { fromDashboard: true }}} > <button className='button-solid-md px-lg font-micro'>Cadastrar</button></Link>
        </div>
    )
}
