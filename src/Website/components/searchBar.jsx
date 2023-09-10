import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

const SearchBar = () => {
    return (
        <React.Fragment>
            <div className='mobileSearch'>
                <div className="searchBarHeader">
                    <CiSearch className='searchIcon' />
                    <input type="text" name="" placeholder='Seach' id="" />
                    <RxCross1 className='crossIcon' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBar