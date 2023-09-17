import React, { useState } from 'react'
import BodyComponent from '../../components/bodyComponent';
import profileImg from '../../../assets/images/guy.png'
import { BsFillChatDotsFill, BsFillCameraVideoFill, BsTelephoneFill } from 'react-icons/bs'
import { AiFillEdit, AiOutlinePlus } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
// import profileImg from '../../../assets/images/guy.png'

export const Privacy = () => {

    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const perPage = 6; // Number of items per page
    const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`); // Sample data array

    // Function to handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // Calculate the starting and ending indices for the current page
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array to display only the items for the current page
    const displayedItems = data.slice(startIndex, endIndex);

    const [isEditArray, setIsEditArray] = useState(new Array(data.length).fill(false));
    const toggleIsEdit = (index) => {
        const newIsEditArray = [...isEditArray];
        newIsEditArray[index] = !newIsEditArray[index];
        setIsEditArray(newIsEditArray);
    };

    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 ">
                        <div className="row">
                            <div className="col-12">
                                <div className="communicationTable privacyTable">
                                    <div className="table-responsive privacyPagination">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Agents</th>
                                                    <th>Status</th>
                                                    <th>Assigned Channels</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    displayedItems.map((item, keyId) => (
                                                        <tr>
                                                            <td>
                                                                <div className="privacyAgentCol">
                                                                    <img src={profileImg} alt="" />
                                                                    <p>
                                                                        Agent Name
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='privacyStatusCol'>
                                                                    <div className='activity'></div> <p>Available</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='iconsChannel'>
                                                                    <button>
                                                                        <BsFillCameraVideoFill />
                                                                    </button>
                                                                    <button>
                                                                        <BsFillChatDotsFill />
                                                                    </button>
                                                                    <button>
                                                                        <BsTelephoneFill />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button className='editColumn'> <AiFillEdit />  </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>

                                        </table>
                                        <ReactPaginate
                                            previousLabel={'Previous'}
                                            nextLabel={'Next'}
                                            breakLabel={'...'}
                                            pageCount={Math.ceil(data.length / perPage)}
                                            marginPagesDisplayed={1}
                                            pageRangeDisplayed={3}
                                            onPageChange={handlePageChange}
                                            containerClassName={'pagination'}
                                            activeClassName={'active'}
                                        />



                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="privacySummary">
                                    <h6>
                                        Summary of Engaged customers
                                    </h6>
                                    <div className="summaryContainer">
                                        <div className="labelContainer">
                                            <label>Instagram</label> <span className='yellow'>65,376</span>
                                        </div>
                                        <div class="progress yellowOpacity">
                                            <div class="progress-bar yellowLoader" style={{ width: '80%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summaryContainer">
                                        <div className="labelContainer">
                                            <label>Instagram</label> <span className='light'>65,376</span>
                                        </div>
                                        <div class="progress lightOpacity">
                                            <div class="progress-bar lightLoader" style={{ width: '80%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summaryContainer">
                                        <div className="labelContainer">
                                            <label>Instagram</label> <span className='blue'>65,376</span>
                                        </div>
                                        <div class="progress blueOpacity">
                                            <div class="progress-bar blueLoader" style={{ width: '80%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summaryContainer">
                                        <div className="labelContainer">
                                            <label>Instagram</label> <span className='red'>65,376</span>
                                        </div>
                                        <div class="progress redOpacity">
                                            <div class="progress-bar redLoader" style={{ width: '80%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="rightSidePrivacyCol">

                            <div className="card">
                                <div className="card-body">
                                    <div className="agentNamePrivacy">
                                        <label htmlFor="">Agent Name</label>
                                        <span>$456</span>
                                    </div>
                                    <p className='agentNamePara'>basic Info:</p>
                                    <p className='agentNamePara'>Channels: live chat, video call, voice call</p>
                                    <p className='agentNamePara'>Customers Interacted with</p>
                                    <div className='usersPrivacyOuter'>

                                        <div className='usersPrivacy'>
                                            <img src={profileImg} alt="" />
                                            <img src={profileImg} alt="" />
                                            <img src={profileImg} alt="" />
                                            {/* <div className="svgPrivacy">
                                                <AiOutlinePlus />
                                            </div> */}
                                        </div>
                                        <button className='showMoreButton'>Show more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="agentNamePrivacy">
                                        <label htmlFor="">Agent Name</label>
                                        <span>$456</span>
                                    </div>
                                    <p className='agentNamePara'>basic Info:</p>
                                    <p className='agentNamePara'>Channels: live chat, video call, voice call</p>
                                    <p className='agentNamePara'>Customers Interacted with</p>
                                    <div className='usersPrivacyOuter'>

                                        <div className='usersPrivacy'>
                                            <img src={profileImg} alt="" />
                                            <img src={profileImg} alt="" />
                                            <img src={profileImg} alt="" />
                                            {/* <div className="svgPrivacy">
                                                <AiOutlinePlus />
                                            </div> */}
                                        </div>
                                        <button className='showMoreButton'>Show more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="agentNamePrivacy">
                                        <label htmlFor="">Agent Name</label>
                                        <span>$456</span>
                                    </div>
                                    <p className='agentNamePara'>basic Info:</p>
                                    <p className='agentNamePara'>Channels: live chat, video call, voice call</p>
                                    <p className='agentNamePara'>Customers Interacted with</p>
                                    <div className='usersPrivacyOuter'>

                                        <div className='usersPrivacy'>
                                            <img src={profileImg} alt="" />
                                            <img src={profileImg} alt="" />
                                            <img src={profileImg} alt="" />
                                            {/* <div className="svgPrivacy">
                                                <AiOutlinePlus />
                                            </div> */}
                                        </div>
                                        <button className='showMoreButton'>Show more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="rightSidePrivacyCoLbutton">Show Complete List</div>
                        </div>

                    </div>

                </div>
            </BodyComponent>
        </React.Fragment>
    )
}
