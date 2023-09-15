import React, { useRef, useState } from 'react'
import BodyComponent from '../../components/bodyComponent'
import ProfileImg from '../../../assets/images/guy.png'
import { BsFillCameraFill } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { SiFacebook } from 'react-icons/si'


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
    const [formSubmitted, setFormSubmitted ] = useState(false)
    const [userData, setUserData] = useState({
        email:'',
        phone:''
    });


    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const getInput = (e) =>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }


    const onFormSubmit = (e) =>{
        e.preventDefault()
        setFormSubmitted(true)
        if( userData.email){
            setUserEmail(userData.email)
        }
        if( userData.phone){
            setUserPhone(userData.phone)
        }
    }
    return (
        <React.Fragment>
            <BodyComponent>

                <div className="container">

                    <div className="row g-5">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">

                            <form className="row" onSubmit={onFormSubmit}>
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
                                        <input type="email" placeholder='xyz@email.com' name='email' onChange={getInput} />
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
                                        <input type="number" placeholder='03xxxxxxxx' name='phone' onChange={getInput} />
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
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                    <div className="formField">
                                        <button>Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                            <h5 className='formHeading5 addFieldMargin'>Contact Info</h5>
                            <div className="addFields addFieldMargin">
                                <p className='fieldHead'>Email</p>
                                <p className='fieldVal'> {userEmail ? userEmail : `xyz@email.com` }</p>
                                <div className="addfieldButton">
                                    <AiFillPlusCircle />
                                    <span>
                                        Add Email
                                    </span>
                                </div>
                            </div>
                            <div className="addFields addFieldMargin">
                                <p className='fieldHead'>Phone</p>
                                <p className='fieldVal'> {userPhone ? userPhone : `123456789` } </p>
                                <div className="addfieldButton">
                                    <AiFillPlusCircle />
                                    <span>
                                        Add Phone Number
                                    </span>
                                </div>
                            </div>
                            <div className="addFields addFieldMargin">
                                <p className='fieldHead'>Social Links</p>
                                <p className='fieldVal fieldValNo'><SiFacebook style={{ color: '#1877F2' }} /> www.facebook.com</p>
                                <p className='fieldVal fieldValNo'><AiFillTwitterCircle style={{ color: '#26a7de ' }} /> www.facebook.com</p>
                                <p className='fieldVal'><AiFillLinkedin style={{ color: '#1877F2' }} /> www.facebook.com</p>
                                <div className="addfieldButton">
                                    <AiFillPlusCircle />
                                    <span>
                                        Add Social Link
                                    </span>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </BodyComponent>
        </React.Fragment>
    )
}
