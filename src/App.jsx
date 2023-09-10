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
import Communication from './Website/pages/Communication/communication';
import Prefernce from './Website/pages/preference/preference';
import Billing from './Website/pages/Billing/billing';




function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.COMMUNICATION} element={<Communication />} />
          <Route path={ROUTES.PREFERENCE} element={<Prefernce />} />
          <Route path={ROUTES.BILLING} element={<Billing />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App;