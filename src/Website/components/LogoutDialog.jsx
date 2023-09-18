import React, {useEffect, useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';


export const LogoutDialog = ({isOpen}) => {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    // useEffect(()=>{
    //     setIsLogoutModalOpen(isOpen);
    // },[isOpen])


    
    const closeLogoutModal = () => {
        setIsLogoutModalOpen(false);
    };


    return (
        <React.Fragment>

            {/* {isLogoutModalOpen && (
                <dialog id='modalLogout' className='modalLogout' open>
                    <div className="modalLogoutMain">

                        <button className='modalLogoutButton' onClick={closeLogoutModal}>
                            <AiOutlineClose />
                        </button>
                        <p>Are you sure you want to logout?</p>
                        <div className="logoutButtons">
                            <button className='yesButton' onClick={closeLogoutModal}>Yes</button>
                            <button className='NoButton' onClick={closeLogoutModal}>No</button>
                        </div>
                    </div>

                </dialog>
            )} */}

        </React.Fragment>
    )
}
