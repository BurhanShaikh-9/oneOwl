import React, { useContext, useEffect, useState } from 'react'
// import logoImg from '../../assets/images/logo/Logo.png'
import { SidebarContext } from '../layout'
import { NavLink, Link } from 'react-router-dom'
import { RxCross2, RxDashboard } from 'react-icons/rx';
import { PiArrowSquareDown, PiTruckLight } from 'react-icons/pi'
import { LiaEdit, LiaListAltSolid } from 'react-icons/lia'
import { BsQuestionCircle } from 'react-icons/bs'
import { GoHome } from 'react-icons/go'
import { LuLogOut } from 'react-icons/lu'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { HiOutlineClipboardDocument } from 'react-icons/hi2'
import { LiaUserSlashSolid } from 'react-icons/lia'
import { AiOutlineFolderAdd, AiOutlineUser } from 'react-icons/ai'
import { GiHospitalCross } from 'react-icons/gi'
import { RiHospitalLine } from 'react-icons/ri'
import { CgFileDocument } from 'react-icons/cg'
import { MdOutlineAdminPanelSettings, MdOutlineManageAccounts } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { ROUTES } from '../../../utils/routes';

export const Sidebar = () => {


    const { sideBar, setSideBar } = useContext(SidebarContext)

    const closeButton = () => {
        setSideBar(!sideBar)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeMobileButton = () => {
        if (screenWidth < 1200) {
            setSideBar(!sideBar)
        }
    }

    return (
        <>
            <aside id="sidebar" className={sideBar ? 'sidebarwidth' : 'sidebar'}>
                <div className="sideBarInner">
                    <div className='aSideCloseButton'>
                        <button onClick={closeButton}><RxCross2 /></button>
                    </div>
                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.DASHBOARD} onClick={closeMobileButton}>
                                <GoHome className='sideIcon' /><span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.COMMUNICATION} onClick={closeMobileButton}>
                                <PiArrowSquareDown className='sideIcon' /><span>Communication</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.PREFERENCE} onClick={closeMobileButton}>
                                <LiaEdit className='sideIcon' /><span>Preference</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.BILLING} onClick={closeMobileButton}>
                                <LiaListAltSolid className='sideIcon' /><span>Billing</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <PiTruckLight className='sideIcon' /><span>Data Privacy</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.PROFILE} onClick={closeMobileButton}>
                                <AiOutlineUser className='sideIcon' /><span>Profile</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.NOTIFICATION} onClick={closeMobileButton}>
                                <IoNotificationsOutline className='sideIcon' /><span>Notification</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.SETTINGS} onClick={closeMobileButton}>
                                <IoSettingsOutline className='sideIcon' /><span>Settings</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey' >
                                <BsQuestionCircle className='sideIcon' /><span>FAQ</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <LuLogOut className='sideIcon' /><span>Logout</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}
