import React from 'react'
import SearchBar from './searchBar'


const BodyComponent = ({ children }) => {
    return (
        <section className='mainSection'>
            <div className="container">
                <div className="mainSectionWrapper">

                    <div className="mainSectionInner">
                        <SearchBar />
                        {children}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BodyComponent