import React, { useEffect, useState } from 'react'
import BodyComponent from '../../components/bodyComponent'
import { AiOutlineWarning } from 'react-icons/ai'
import profileImg from '../../../assets/images/guy.png'
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'

export const Faq = () => {


    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const perPage = 4; // Number of items per page
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
                <div className="notificationComponent">
                    <div className="headingMainCon">
                        <h3>FAQ (Frequently Asked Questions)</h3>

                    </div>
                    {
                        displayedItems.map((item, keyId) => (

                            <div className="faqItem">
                                <div className="faqHeader">
                                    <div className="faqHeaderLeft">
                                        <img src={profileImg} alt="" />
                                        <div className="headerInnerLeft">
                                            <p className='customerName'>Antonio</p>
                                            <p>Just Now</p>
                                        </div>
                                    </div>
                                    <div className="faqHeaderRight">
                                        <button className='clear'>Clear</button>
                                        <button className='view' onClick={() => toggleIsEdit(keyId)}>View</button>
                                    </div>
                                </div>

                                {!isEditArray[keyId] &&
                                    <div className="accordion accordion-flush" id={`accordionFlushExample-${keyId}`}>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${keyId}`} aria-expanded="false" aria-controls={`flush-collapseOne${keyId}`}>
                                                    What One Owl is ?
                                                </button>
                                            </h2>
                                            <div id={`flush-collapseOne${keyId}`} className="accordion-collapse collapse" data-bs-parent={`#accordionFlushExample-${keyId}`}>
                                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed quod quidem vitae tenetur illum placeat eligendi doloribus neque aspernatur.</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {isEditArray[keyId] &&
                                    <div className="faqAnswer">
                                        <div className="question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus provident ex nesciunt magni delectus iure error voluptatum tempora incidunt quod, tempore, harum modi ipsam, iusto sunt! Natus mollitia velit illo.</div>


                                        <div className="answerBox">
                                            <input type="text" placeholder='Type Answer Here' />
                                            <button className='sendChatButton'>
                                                <PiPaperPlaneTiltBold />
                                            </button>
                                        </div>
                                    </div>

                                }


                            </div>
                        ))
                    }

                </div>
                <ReactPaginate
                    previousLabel={<MdKeyboardArrowLeft />}
                    nextLabel={<MdKeyboardArrowRight />}
                    breakLabel={'...'}
                    pageCount={Math.ceil(data.length / perPage)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />

            </BodyComponent>
        </React.Fragment>
    )
}
