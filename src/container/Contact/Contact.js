import React from 'react'

import Aux from '../../hoc/hoc'

import './Contact.css'

const Contact = props => {
    return (
        <Aux>
            <div className="contactWrapper">
                <div className="contactHeader">Contact</div>
                <div className="contactDetails">
                    <div>
                        <div className="contactEle">
                            <div className="mailIcon"></div>
                            <div className="mailDesc">non_nontra@hotmail.com</div>
                        </div>
                        <div className="contactEle">
                            <div className="phoneIcon"></div>
                            <div className="phoneDesc"><a href="tel:+66946214452">+66946211452 (TH)</a></div>
                        </div>
                        {/* <div className="contactEle">
                            <div className="githubIcon"></div>
                            <div className="gitHubLink"><a href="https://github.com/fantasyzernontra">fantasyzernontra</a></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default Contact