import React, { useEffect, useState } from 'react'
import BodyComponent from '../../components/bodyComponent'
import { AiOutlineWarning } from 'react-icons/ai'
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const Notification = () => {



    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const perPage = 4; // Number of items per page
    // const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`); 
    // const [data, setData] = useState(Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`));


    const [data, setData] = useState([
        {
            notificationHeader: 'Unread Notification - notification1',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification2',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification3',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification4',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification5',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
    ])

    const clearAllData = () => {
        setData([]); // Set data to an empty array
    };

    // Function to handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // Calculate the starting and ending indices for the current page
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array to display only the items for the current page
    const displayedItems = data.slice(startIndex, endIndex);

    const clearItem = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };


    return (
        <React.Fragment>
            <BodyComponent>
                <div className="notificationComponent">
                    <div className="headingMainCon">
                        <h3>Notification</h3>
                        <button className='clear' onClick={clearAllData}>Clear All</button>
                    </div>
                    {
                        displayedItems.map((item, keyId) => (


                            <div className="mainListComp" key={keyId}>
                                <div className="mainListHeading">
                                    <h6>
                                        <AiOutlineWarning />
                                        {item.notificationHeader}
                                    </h6>
                                    <span>hh:mm AM/PM</span>
                                </div>
                                <div className="mainListPara">
                                    {item.notificationBody}
                                </div>

                                <div className="listingButtons">
                                    <button className="clear" onClick={() => clearItem(keyId)}>
                                        Clear
                                    </button>
                                    <button className="View">
                                        View
                                    </button>
                                </div>
                                <hr />
                            </div>
                        ))
                    }

                </div>

                {
                    data &&
                    <ReactPaginate
                        previousLabel={<MdKeyboardArrowLeft />}
                        nextLabel={<MdKeyboardArrowRight />}
                        breakLabel={'...'}
                        pageCount={Math.ceil(data.length / perPage)}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                }
            </BodyComponent>
        </React.Fragment>
    )
}
