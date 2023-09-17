import React, { useRef, useState } from 'react'
import BodyComponent from '../../components/bodyComponent'
import ProfileImg from '../../../assets/images/guy.png'
import { BsFillCameraFill } from 'react-icons/bs'
import { BiLinkAlt } from 'react-icons/bi'
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
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [userData, setUserData] = useState({
        email: '',
        phone: ''
    });


    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const getInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }


    const onFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        if (userData.email) {
            setUserEmail(userData.email)
        }
        if (userData.phone) {
            setUserPhone(userData.phone)
        }
    }



    

    const [addPhone, setAddPhone] = useState(false)
    const [addEmail, setAddEmail] = useState(false)
    const [addSocial, setAddSocial] = useState(false)

    const [removeEmail, setremoveEmail] = useState(true)
    const [removePhone, setremovePhone] = useState(true)
    const [removeSocial, setremoveSocial] = useState(true)

    const [addPhoneVal, setAddPhoneVal] = useState('')
    const [addEmailVal, setAddEmailVal] = useState('')
    const [addSocialVal, setAddSocialVal] = useState('')

    const [addedEmail, setAddedEmail] = useState(false)
    const [addedPhone, setAddedPhone] = useState(false)
    const [addedSocial, setAddedSocial] = useState(false)



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
                                <p className='fieldVal'> {userEmail ? userEmail : `xyz@email.com`}</p>
                                {
                                    addedEmail &&
                                    <p className='fieldVal'> {addEmailVal} </p>
                                }

                                {removeEmail && <>

                                    {addEmail ?
                                        <div className="AddInput">
                                            <input type="email" value={addEmailVal} onChange={(e) => setAddEmailVal(e.target.value)} />
                                            <button onClick={() => { setAddedEmail(true), setremoveEmail(false) }}>Add</button>
                                        </div>
                                        :
                                        <button className="addfieldButton" onClick={() => setAddEmail(true)}>
                                            <AiFillPlusCircle />
                                            <span>
                                                Add Email
                                            </span>
                                        </button>
                                    }
                                </>}

                            </div>
                            <div className="addFields addFieldMargin">
                                <p className='fieldHead'>Phone</p>
                                <p className='fieldVal'> {userPhone ? userPhone : `123456789`} </p>
                                {
                                    addedPhone &&
                                    <p className='fieldVal'> {addPhoneVal} </p>
                                }
                                {removePhone && <>

                                    {addPhone ?
                                        <div className="AddInput">
                                            <input type="number" value={addPhoneVal} onChange={(e) => setAddPhoneVal(e.target.value)} />
                                            <button onClick={() => { setAddedPhone(true), setremovePhone(false) }}>Add</button>
                                        </div>

                                        :
                                        <button className="addfieldButton" onClick={() => setAddPhone(true)}>
                                            <AiFillPlusCircle />
                                            <span>
                                                Add Phone Number
                                            </span>
                                        </button>
                                    }
                                </>
                                }
                            </div>
                            <div className="addFields addFieldMargin">
                                <p className='fieldHead'>Social Links</p>
                                {
                                    addedSocial &&
                                    < a className='fieldVal fieldAnchor fieldValNo' href={`${addSocialVal}`} target="_blank"><BiLinkAlt />{addSocialVal} </a>
                                }
                                <a className='fieldVal fieldAnchor fieldValNo' href='https://www.facebook.com/' target="_blank"><SiFacebook style={{ color: '#1877F2' }} /> www.facebook.com</a>
                                <a className='fieldVal fieldAnchor fieldValNo' href='https://www.twitter.com/' target="_blank"><AiFillTwitterCircle style={{ color: '#26a7de ' }} /> www.twitter.com</a>
                                <a className='fieldVal fieldAnchor' href='https://www.linkedin.com/' target="_blank"><AiFillLinkedin style={{ color: '#1877F2' }} />  www.LinkedIn.com</a>

                                {removeSocial && <>
                                    {addSocial ?
                                        <div className="AddInput">
                                            <input type="text" value={addSocialVal} onChange={(e) => setAddSocialVal(e.target.value)} />
                                            <button onClick={() => { setAddedSocial(true), setremoveSocial(false) }}>Add</button>
                                        </div>
                                        :
                                        <button className="addfieldButton" onClick={() => setAddSocial(true)}>
                                            <AiFillPlusCircle />
                                            <span>
                                                Add Social Link
                                            </span>
                                        </button>
                                    }
                                </>}

                            </div>



                        </div>
                    </div>

                </div>
            </BodyComponent>
        </React.Fragment >
    )
}
