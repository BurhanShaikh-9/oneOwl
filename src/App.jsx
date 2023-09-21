import React, { createContext, useEffect, useState } from 'react'
import './styles/App.css'
import './styles/responsive.css'
import { Sidebar } from './Website/components/sidebar';
// import 'react-toastify/dist/ReactToastify.css';
// import { ExternalRoutes } from './routing/routes';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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

  const { getDarkMode } = DarkMode();
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

  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  const trackEvent = (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return (
    <React.Fragment>
      <UserNameContext.Provider value={[userState, userStateLast]}>
        <ThemeContext.Provider value={isDarkMode}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />}    onEnter={() => trackEvent('Page View', 'Dashboard View', 'Dashboard')}/>
              <Route path={ROUTES.COMMUNICATION} element={<Communication/>}  onEnter={() => trackEvent('Page View', 'Communication View', 'Communication')}/>
              <Route path={ROUTES.FAQ} element={<Faq />}   onEnter={() => trackEvent('Page View', 'FAQ View', 'FAQ')}/>
              <Route path={ROUTES.PREFERENCE} element={<Prefernce />}   onEnter={() => trackEvent('Page View', 'Preference View', 'Preference')}/>
              <Route path={ROUTES.BILLING} element={<Billing />} onEnter={() => trackEvent('Page View', 'Billing View', 'Billing')}/>
              <Route path={ROUTES.NOTIFICATION} element={<Notification />} onEnter={() => trackEvent('Page View', 'Notification View', 'Notification')}/>
              <Route path={ROUTES.SETTINGS} element={<Settings getThemeColor={getThemeColor} />} onEnter={() => trackEvent('Page View', 'Settings View', 'Settings')}/>
              <Route path={ROUTES.PROFILE} element={<Profile getUserNameVal={getUserNameVal} getUserLastVal={getUserLastVal} />} onEnter={() => trackEvent('Page View', 'Profile View', 'Profile')}/>
              <Route path={ROUTES.PRIVACY} element={<Privacy />} onEnter={() => trackEvent('Page View', 'Privacy View', 'Privacy')}/>
            </Route>
          </Routes>
        </ThemeContext.Provider>
      </UserNameContext.Provider>
    </React.Fragment>
  )
}

export default App;