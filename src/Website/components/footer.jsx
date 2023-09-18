import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { LiaEdit, LiaListAltSolid } from 'react-icons/lia'
import { BsQuestionCircle } from 'react-icons/bs'
import { GoHome } from 'react-icons/go'
import { LuLogOut } from 'react-icons/lu'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { ROUTES } from '../../../utils/routes'
import { LogoutDialog } from './LogoutDialog'
import { useState } from 'react'

export const Footer = () => {
    
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    return (
        <React.Fragment>

            <footer className='footer2'>
                <div className="footer">
                    <Link to={ROUTES.PROFILE}>
                        <AiOutlineUser />
                    </Link>
                    <Link to={ROUTES.SETTINGS}>
                        <IoSettingsOutline />
                    </Link>
                    <Link to={ROUTES.FAQ}>
                        <BsQuestionCircle />
                    </Link>
                    <Link >
                        <LuLogOut onClick={()=>setLogoutModalOpen(true)}/>
                    </Link>
                    <Link to={ROUTES.NOTIFICATION}>
                        <IoNotificationsOutline />
                    </Link>
                </div>
            </footer>
            <LogoutDialog  isOpen={logoutModalOpen} />
        </React.Fragment>
    )
}
