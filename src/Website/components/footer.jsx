import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {LiaEdit, LiaListAltSolid} from 'react-icons/lia'
import {BsQuestionCircle} from 'react-icons/bs'
import {GoHome} from 'react-icons/go'
import {LuLogOut} from 'react-icons/lu'
import {IoNotificationsOutline , IoSettingsOutline} from 'react-icons/io5'

export const Footer = () => {
    return (
        <footer className='footer2'>
                <div className="footer">
                        <Link >
                            <AiOutlineUser/>
                        </Link>
                        <Link >
                            <IoSettingsOutline/>
                        </Link>
                        <Link >
                            <BsQuestionCircle/>
                        </Link>
                        <Link >
                            <LuLogOut/>
                        </Link>
                        <Link >
                            <IoNotificationsOutline/>
                        </Link>
                </div>
        </footer>
    )
}
