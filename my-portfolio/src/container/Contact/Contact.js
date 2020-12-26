import React from 'react'

import Aux from '../../hoc/hoc'

import './Contact.css'

const Contact = props => {
    return (
        <Aux>
            <div className="contactWrapper">
                <div className="contactHeader">Contact</div>
                <div>
                    <div>
                        <div className="icono-mail mailIcon"></div>
                        <div className="mailDesc">non_nontra@hotmail.com</div>
                    </div>
                    <div>
                        <div className="icono-iphone phoneIcon"></div>
                        <div className="phoneDesc"><a href="tel:+66946211452">+66946211452</a></div>
                    </div>
                    <div>
                        <div className="githubDesc"><a href="https://github.com/fantasyzernontra">fantasyzernontra</a></div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default Contact