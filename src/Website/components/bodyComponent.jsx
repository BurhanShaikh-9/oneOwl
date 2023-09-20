import React from 'react'
import SearchBar from './searchBar'
import { useContext } from 'react'
import { ThemeContext } from '../../services/contextFile'


const BodyComponent = ({ children }) => {

    const isDarkMode = useContext(ThemeContext)


  
  

    return (
        <section className='mainSection'>
            <div className="container">
                <div className={isDarkMode ? 'mainSectionWrapperDark' : 'mainSectionWrapper'}>

                    <div className="mainSectionInner">

                        <div className='mobileSearch'>
                            <SearchBar />
                        </div>
                        {children}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BodyComponent