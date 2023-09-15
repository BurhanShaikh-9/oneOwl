import React from 'react'
import BodyComponent from '../../components/bodyComponent';
import billing1 from '../../../assets/images/billing4.png'
import billing2 from '../../../assets/images/billing2.png'
import billing3 from '../../../assets/images/billing3.png'
import billing4 from '../../../assets/images/billing1.png'
import { BsFillChatDotsFill, BsFillCameraVideoFill, BsFillMicFill, BsWhatsapp, BsFacebook, BsTwitter } from 'react-icons/bs'

const Billing = () => {
    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing1} alt="" />
                                    <div className='billingChartInner'>
                                        <p>75</p>
                                        <span>Total Orders</span>
                                        <small>(30 Days)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing2} alt="" />
                                    <div className='billingChartInner'>
                                        <p>357</p>
                                        <span>Total Transactions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing3} alt="" />
                                    <div className='billingChartInner'>
                                        <p>75</p>
                                        <span>Total Cancelled</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing4} alt="" />
                                    <div className='billingChartInner'>
                                        <p>$128</p>
                                        <span>Total Revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingTableHeading">
                                    <p>
                                        Summary of Total Placed Orders
                                    </p>
                                    <div className="billingBtnGroup">
                                        <button className='whiteButton'>Today</button>
                                        <button className='whiteButton'>Yesterday</button>
                                    </div>
                                </div>
                                <div className="communicationTable BillingTable">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Channel</th>
                                                    <th>Agents</th>
                                                    <th>Transaction</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="billingBodyRow">

                                                            <div className="billingIconTable">
                                                                <BsFillChatDotsFill />
                                                            </div>
                                                            <div className="billingColTable">
                                                                <p>
                                                                    Live Chat
                                                                </p>
                                                                <small>
                                                                    12-July- 2023 09:00pm
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="billingBodyRow">

                                                            <div className="billingIconTable">
                                                                <BsFillCameraVideoFill />
                                                            </div>
                                                            <div className="billingColTable">
                                                                <p>
                                                                    Live Chat
                                                                </p>
                                                                <small>
                                                                    12-July- 2023 09:00pm
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="billingBodyRow">

                                                            <div className="billingIconTable">
                                                                <BsFillMicFill />
                                                            </div>
                                                            <div className="billingColTable">
                                                                <p>
                                                                    Live Chat
                                                                </p>
                                                                <small>
                                                                    12-July- 2023 09:00pm
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="billingBodyRow">

                                                            <div className="billingIconTable">
                                                                <BsWhatsapp />
                                                            </div>
                                                            <div className="billingColTable">
                                                                <p>
                                                                    Live Chat
                                                                </p>
                                                                <small>
                                                                    12-July- 2023 09:00pm
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="billingBodyRow">

                                                            <div className="billingIconTable">
                                                                <BsFacebook />
                                                            </div>
                                                            <div className="billingColTable">
                                                                <p>
                                                                    Live Chat
                                                                </p>
                                                                <small>
                                                                    12-July- 2023 09:00pm
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="billingBodyRow">

                                                            <div className="billingIconTable">
                                                                <BsTwitter />
                                                            </div>
                                                            <div className="billingColTable">
                                                                <p>
                                                                    Live Chat
                                                                </p>
                                                                <small>
                                                                    12-July- 2023 09:00pm
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingMain">
                                    <h6>Place Your Order</h6>
                                    <div className="row g-4">

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 ">
                                        <h6>
                                            Select your Agent you want to talk with
                                        </h6>
                                        <div className="billingMainInner">

                                            <input className='billingMainSearch' type="text" placeholder='Search' name="" id="" />
                                            <div className="checkBoxesBilling">
                                                <div className="checkboxBill">
                                                    <input type="checkbox" />
                                                    <label htmlFor="">Live Chat</label>
                                                </div>
                                                <div className="checkboxBill">
                                                    <input type="checkbox" />
                                                    <label htmlFor="">Video Call</label>
                                                </div>
                                                <div className="checkboxBill">
                                                    <input type="checkbox" />
                                                    <label htmlFor="">Voice Call</label>
                                                </div>
                                                <div className="checkboxBill">
                                                    <input type="checkbox" />
                                                    <label htmlFor="">Facebook</label>
                                                </div>
                                                <div className="checkboxBill">
                                                    <input type="checkbox" />
                                                    <label htmlFor="">Whatsapp</label>
                                                </div>
                                                <div className="checkboxBill">
                                                    <input type="checkbox" />
                                                    <label htmlFor="">Twitter</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="billinBtnGroupOtr">
                                            <div className="billinBtnGroup">
                                                <div className="billBtnGr">
                                                    <input type="radio" id="monthlySubscribe" name="subscriptionPlan" />
                                                    <label htmlFor="monthlySubscribe">Monthly</label>
                                                </div>
                                                <div className="billBtnGr">
                                                    <input type="radio" id="ServiceSubscribe" name="subscriptionPlan" />
                                                    <label htmlFor="ServiceSubscribe">Per Service</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                                        <div className="billingTotal">
                                            <div className="topBilling">
                                                <div className="totalPara">
                                                    <p>Total Transaction</p>
                                                    <small>For Monthly</small>
                                                </div>
                                                <h5>$45</h5>
                                            </div>
                                            <div className="bottomBilling">
                                                <button>
                                                    Place Your Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BodyComponent>
        </React.Fragment>
    )
}

export default Billing