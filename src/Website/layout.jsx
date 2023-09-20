import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Sidebar } from './components/sidebar'
import { useContext } from 'react'
import { ThemeContext } from '../services/contextFile'
export const SidebarContext = createContext({ sideBar: false, setSideBar: () => { } })

export const Layout = () => {
    const [sideBar, setsideBar] = useState(false);
    const getSideBarPos = (value) => {
        setsideBar(!value);
    }

    const darkMode = useContext(ThemeContext)
    return (
        <React.Fragment>
            <div className={darkMode && 'darkMain'}>

                <SidebarContext.Provider value={{ sideBar: sideBar, setSideBar: setsideBar }}>
                    <Header />
                    <div className={sideBar ? 'AppFull' : 'App'}>
                        <Sidebar />
                        <Outlet />
                    </div>
                </SidebarContext.Provider>
                <Footer />
            </div>
        </React.Fragment>
    )
}
