import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

const BodyComponent = ({ children }) => {
    return (
        <section className='mainSection'>
            <div className="container">
                <div className="mainSectionWrapper">

                    <div className="mainSectionInner">

                        <div className='mobileSearch'>
                            <div className="searchBarHeader">
                                <CiSearch className='searchIcon' />
                                <input type="text" name="" placeholder='Seach' id="" />
                                <RxCross1 className='crossIcon' />
                            </div>
                        </div>


                        {children}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default BodyComponent