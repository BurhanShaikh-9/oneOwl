import React, { createContext, useEffect, useState } from 'react'
import './styles/App.css'
import './styles/responsive.css'
import { Sidebar } from './Website/components/sidebar';
// import 'react-toastify/dist/ReactToastify.css';
// import { ExternalRoutes } from './routing/routes';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { Dashboard } from './Website/pages/Dashboard/dashboard'
import { Layout } from './Website/layout'




function App() {
 

  return (
    <React.Fragment>


      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Routes>

    </React.Fragment>
  )
}

export default App;