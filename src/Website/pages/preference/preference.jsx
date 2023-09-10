import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import StatsBar from '../../components/stats'
import { BsThreeDots, BsBug } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import profileImg from '../../../assets/images/guy.png'
import { HiMiniSignal } from 'react-icons/hi2'
import filterSvg from '../../../assets/images/Filter.svg'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import ProfileImg from '../../../assets/images/guy.png'

const Prefernce = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    return (
        <React.Fragment>

            <BodyComponent>
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">

                        <div className="row g-3 marginBottomRow">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="card cardMargin">
                                    <div className="card-body">
                                        <div className="headingNotification">
                                            <span>Notification</span>
                                            <div className="dropdown">
                                                <button className="btnDropDown" onClick={() => { setIsDropDown(!isDropDown) }}>
                                                    <BsThreeDots />
                                                </button>
                                                {
                                                    isDropDown &&
                                                    <ul className="dropdownMenu">
                                                        <li><a className="dropdown-item active" href="#">Facebook</a></li>
                                                        <li><a className="dropdown-item" href="#">Twitter</a></li>
                                                        <li><a className="dropdown-item" href="#">Whatsapp</a></li>
                                                        <li><a className="dropdown-item" href="#">Live Chats</a></li>
                                                    </ul>
                                                }
                                            </div>
                                        </div>

                                        <div className="allNotificationCard">
                                            <div className="notify">
                                                <BsBug />
                                                <div className="notifyInfo">
                                                    <p>You have a bug that needs to be fixed.</p>
                                                    <small>Just now</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <AiOutlineUser />
                                                <div className="notifyInfo">
                                                    <p>New user registered</p>
                                                    <small>59 minutes ago</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <BsBug />
                                                <div className="notifyInfo">
                                                    <p>You have a bug that needs to be fixed.</p>
                                                    <small>Just now</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <HiMiniSignal />
                                                <div className="notifyInfo">
                                                    <p>Andi Lane subscribed to you</p>
                                                    <small>Today, 11:59 AM</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <HiMiniSignal />
                                                <div className="notifyInfo">
                                                    <p>Andi Lane subscribed to you</p>
                                                    <small>Today, 11:59 AM</small>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 marginBottomRow">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="card cardMargin">
                                    <div className="card-body">
                                        <div className="headingNotification">
                                            <span>Activities</span>
                                        </div>

                                        <div className="allNotificationCard">
                                            <div className="notify">
                                                <img src={profileImg} alt="" />
                                                <div className="notifyInfo">
                                                    <p>You have a bug that needs to be fixed.</p>
                                                    <small>Just now</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <img src={profileImg} alt="" />
                                                <div className="notifyInfo">
                                                    <p>New user registered</p>
                                                    <small>59 minutes ago</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <img src={profileImg} alt="" />
                                                <div className="notifyInfo">
                                                    <p>You have a bug that needs to be fixed.</p>
                                                    <small>Just now</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <img src={profileImg} alt="" />
                                                <div className="notifyInfo">
                                                    <p>Andi Lane subscribed to you</p>
                                                    <small>Today, 11:59 AM</small>
                                                </div>
                                            </div>
                                            <div className="notify">
                                                <img src={profileImg} alt="" />
                                                <div className="notifyInfo">
                                                    <p>Andi Lane subscribed to you</p>
                                                    <small>Today, 11:59 AM</small>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <div className="row g-3 marginBottomRow">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="card cardMargin">
                                    <div className="card-body">
                                        <div className="preferenceMaintable">

                                            <div className="preferenceHeading">
                                                <p className='mainHeadingPreferenceTable'>Conversation Summary Details</p>
                                                <div className='preferenceRight'>
                                                    <button className='filterButton'>
                                                        <img src={filterSvg} alt="" />
                                                        <span>Filters</span>
                                                    </button>
                                                    <button>
                                                        Channels
                                                    </button>
                                                    <button>
                                                        date
                                                    </button>
                                                    <button>
                                                        Type
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="preferenceTable">
                                                <div className="table-responsive">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Name of Agent</th>
                                                                <th>Channel</th>
                                                                <th>Date</th>
                                                                <th>Time</th>
                                                                <th>Duration</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                          
                                                           
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Agent Name</td>
                                                                <td>Live Chat</td>
                                                                <td>7 July 2023</td>
                                                                <td>07:00 PM</td>
                                                                <td>01:54:89</td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div>
                                    <h6>
                                        All Contacts
                                    </h6>
                                </div>
                                <div className='searchBar2'>
                                    <CiSearch className='searchIcon' />
                                    <input type="text" name="" placeholder='Seach Contacts' id="" />
                                </div>
                                <ul className='agentList agentPreference'>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                    <li>
                                        <img src={ProfileImg} alt="" />
                                        <p>Agent Name</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </BodyComponent>
        </React.Fragment>
    )
}

export default Prefernce