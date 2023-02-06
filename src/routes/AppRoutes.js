import React from 'react';
import { Route, Routes } from "react-router";
import Logo from '../images/educatea-logotipo.png'
import Login from '../pages/login/';
import Stores from '../pages/stores/';
import Consultancy from '../pages/consultancy/';
import Information from '../pages/information/';
import ActivitiesPage from '../pages/activities/';
import ActivityDetails from '../pages/activityDetails';
import PestPage from '../pages/pestsPage/';
import iconDownload from '../images/download-2-512.png';
import Catalog from '../pages/catalog/';

export default function AppRoutes() {
    return (
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route
          path='/activities'
          element={ <ActivitiesPage navbar logo={ Logo } header/> } 
        />
        <Route path ='/activities/:id' element={  <ActivityDetails navbar logo={ Logo } header/>  } />
        <Route
          path='/activities/:id/:name'
          element={ <PestPage navbar logo={ Logo } icon={ iconDownload } header /> } />
        <Route path='/stores' element={ <Stores navbar logo={ Logo } header /> } />
        <Route path='/stores/:store' element={ <Catalog logo={ Logo } navbar header /> } />
        <Route path='/catalog' element={ <Catalog logo={ Logo } navbar /> } />
        <Route path='/consultancy' element={ <Consultancy navbar logo={ Logo } /> } />
        <Route path='/profile' element={ <Information navbar logo={ Logo } /> } />
      </Routes>
    )
}
