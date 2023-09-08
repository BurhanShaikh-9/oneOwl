import React, { useContext, useEffect, useState } from 'react'
import logoImg from '../../assets/images/logo/Logo.png'
import { SidebarContext } from '../layout'
import { NavLink, Link } from 'react-router-dom'
import { RxCross2, RxDashboard } from 'react-icons/rx';
import {PiArrowSquareDown, PiTruckLight} from 'react-icons/pi'
import {LiaEdit, LiaListAltSolid} from 'react-icons/lia'
import {BsQuestionCircle} from 'react-icons/bs'
import {GoHome} from 'react-icons/go'
import {LuLogOut} from 'react-icons/lu'
import {IoNotificationsOutline , IoSettingsOutline} from 'react-icons/io5'
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

    console.log(sideBar, 'sidebar');
    return (
        <>
            <aside id="sidebar" className={sideBar ? 'sidebarwidth' : 'sidebar'}>
                <div className="sideBarInner">
                    <div className='aSideCloseButton'>
                        <button onClick={closeButton}><RxCross2 /></button>
                    </div>
                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link  collapsed" activeclassname="active" to={ROUTES.DASHBOARD}>
                                <GoHome className='sideIcon' /><span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <PiArrowSquareDown className='sideIcon' /><span>Communication</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <LiaEdit className='sideIcon' /><span>Preference</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <LiaListAltSolid className='sideIcon' /><span>Billing</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <PiTruckLight className='sideIcon' /><span>Data Privacy</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <AiOutlineUser className='sideIcon' /><span>Profile</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
                                <IoNotificationsOutline className='sideIcon' /><span>Notification</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="nav-link  collapsed" activeclassname="active" to='/hey'>
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
