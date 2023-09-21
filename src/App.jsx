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
import { Notification } from './Website/pages/Notification/notification';
import { Settings } from './Website/pages/Settings/settings';
import { Profile } from './Website/pages/profile/profile';
import { Faq } from './Website/pages/faq/faq';
import { Privacy } from './Website/pages/Privacy/privacy';
import { UserNameContext, ThemeContext } from './services/contextFile';
import { DarkMode } from './services/darkMode';
import ReactGA from 'react-ga';


const TRACKING_ID = "G-3L133H7SGZ"
ReactGA.initialize(TRACKING_ID);


function App() {

  const {getDarkMode} = DarkMode();
  const [userState, setUserState] = useState('');
  const [userStateLast, setUserStateLast] = useState('');
  const getUserNameVal = (data) => {
    setUserState(data)
  }
  const getUserLastVal = (data) => {
    setUserStateLast(data)
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const getThemeColor = (data) => {
    setIsDarkMode(data)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.backgroundColor = '#222222';
    } 
    return () => {
      document.documentElement.style.backgroundColor = ''; 
    };
  }, [isDarkMode]);

  useEffect(()=>{
    setIsDarkMode(getDarkMode())
  },[])



  useEffect(() => {
    const currentPath = window.location.pathname + window.location.search;
    ReactGA.pageview(currentPath);
  }, []);
  
  return (
    <React.Fragment>
      <UserNameContext.Provider value={[userState, userStateLast]}>
        <ThemeContext.Provider value={isDarkMode}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTES.COMMUNICATION} element={<Communication />} />
              <Route path={ROUTES.FAQ} element={<Faq />} />
              <Route path={ROUTES.PREFERENCE} element={<Prefernce />} />
              <Route path={ROUTES.BILLING} element={<Billing />} />
              <Route path={ROUTES.NOTIFICATION} element={<Notification />} />
              <Route path={ROUTES.SETTINGS} element={<Settings getThemeColor={getThemeColor}/>} />
              <Route path={ROUTES.PROFILE} element={<Profile getUserNameVal={getUserNameVal} getUserLastVal={getUserLastVal} />} />
              <Route path={ROUTES.PRIVACY} element={<Privacy />} />
            </Route>
          </Routes>
        </ThemeContext.Provider>
      </UserNameContext.Provider>
    </React.Fragment>
  )
}

export default App;