import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import { DarkMode } from '../../../services/darkMode';

export const Settings = ({getThemeColor, isDarkMode}) => {
    const {setDarkMode, getDarkMode} = DarkMode(); 
    const darkMode = getDarkMode();

    return (
        <React.Fragment>
            <BodyComponent>
                <div className="notificationComponent">
                    <div className="headingMainCon">
                        <h3>Settings</h3>
                    </div>



                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                    Desktop Push Notification
                                </h6>
                            </div>
                            <div className="mainListPara">
                                Receive push notification on mentions, comments, alerts, edit changes, supply and target meet
                            </div>
                        </div>
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                    Email Notification
                                </h6>
                            </div>
                            <div className="mainListPara">
                                Receive push notification on mentions, comments, alerts, edit changes, supply and target meet
                            </div>
                        </div>
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                Dark Theme
                                </h6>
                            </div>
                            <div className="mainListPara">
                            use the system settings to enable dark theme
                            </div>
                        </div>
                     
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" checked={darkMode} onChange={(e)=>{getThemeColor(e.target.checked ? true : false), setDarkMode(e.target.checked ? true : false)}}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                    Sound Notification
                                </h6>
                            </div>
                            <div className="mainListPara">
                                Enable sound notification on mentions, comments, alerts, edit changes, supply and target meet
                            </div>
                        </div>
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                </div>

            </BodyComponent>
        </React.Fragment>
    )
}
