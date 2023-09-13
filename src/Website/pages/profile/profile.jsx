import React, { useRef, useState } from 'react'
import BodyComponent from '../../components/bodyComponent'
import ProfileImg from '../../../assets/images/guy.png'
import { BsFillCameraFill } from 'react-icons/bs'


export const Profile = () => {
    const [isHovered, setIsHovered] = useState(false);

    const fileInputRef = useRef(null);
    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            alert(`Selected file: ${selectedFile.name}`);
            // You can perform further actions with the selected file here
        }
    };

    return (
        <React.Fragment>
            <BodyComponent>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                <h4 className='profileCustomer'>Customer</h4>
                                <h4 className='profileCustomer'>Name</h4>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 " align="center">
                                <div className="profileImg" onClick={handleImageClick}>
                                    <BsFillCameraFill className="camera-icon" />
                                    <img src={ProfileImg} alt="" />
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <h5 className='formHeading5'>Basic Info</h5>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                <div className="formField">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" placeholder='First Name' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                <div className="formField">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" placeholder='Last Name' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="formField">
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='xyz@email.com' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="formField">
                                    <label htmlFor="">Address</label>
                                    <input type="text" placeholder='Customer Address Here' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="formField">
                                    <label htmlFor="">Contact Number</label>
                                    <input type="email" placeholder='03xxxxxxxx' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                <div className="formField">
                                    <label htmlFor="">City</label>
                                    <select name="" id="">
                                        <option value="">Select</option>
                                        <option value="">Seattle</option>
                                        <option value="">Olympia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                <div className="formField">
                                    <label htmlFor="">State</label>
                                    <select name="" id="">
                                        <option value="">Select</option>
                                        <option value="">New York</option>
                                        <option value="">Washington</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                <div className="formField">
                                    <label htmlFor="">Pasword</label>
                                    <input type="password" placeholder='03xxxxxxxx' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                        hey
                    </div>
                </div>

            </BodyComponent>
        </React.Fragment>
    )
}