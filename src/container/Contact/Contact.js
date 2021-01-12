import React, { useState, useEffect } from 'react'

import Aux from '../../hoc/hoc'

import './Contact.css'

const Contact = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.pageYOffset = 0
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.documentElement.dataset.scroll = 0
        document.body.style.backgroundColor = '#fff'
         changeNavLinkColor()

    }, [])

    const changeNavLinkColor = () => {
        const NavLink = document.querySelectorAll('#navLink')
        const NavWrapper = document.querySelector('.wrapper')
        const HamLine = document.querySelectorAll('.hamLine')
        const navMobile = document.querySelector('.navMobile')
        const navMBele = document.querySelectorAll('#navMBele')
        NavWrapper.style.backgroundColor = '#fff'
        navMobile.style.backgroundColor = '#fff'
        for (let i = 0; i < NavLink.length; i++)
            NavLink[i].style.color = '#132743'
        for (let i = 0; i < HamLine.length; i++)
            HamLine[i].style.backgroundColor = '#132743'
        for (let i = 0; i < navMBele.length; i++)
            navMBele[i].style.color = '#132743'
    }


    const [message, setMessage] = useState({
        name: '',
        email: '',
        msg: ''
    })

    const inputChangeHandler = e => {
        setMessage({ ...message, [e.target.name]: [e.target.value] })
    }

    const submitMessage = async () => {
        await fetch('https://nonnontra-portfolioapi.azurewebsites.net/recieveMessage', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        }).then(() => {
            alert('Your message has sent. I would contact your back asap!!!')
            window.location.reload()
        }).catch(err => console.log(err))
    }

    return (
        <Aux>
            <div className="contactWrapper">
                <div className="contactHeader">Contact</div>
                <div className="contactBody">
                    <div className="contactForm">
                        <div className="formHeader">Would like to talk to me?</div>
                        <div className="formSubHeader">Please enquire this below.</div>
                        <div className="form">
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" onChange={inputChangeHandler} value={message.name} />
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text" onChange={inputChangeHandler} value={message.email} />
                            <label html="msg">Your Message</label>
                            <textarea name="msg" rows="3" onChange={inputChangeHandler} value={message.msg} />
                        </div>
                        <div className="buttonDiv">
                            <button className="messageButton" onClick={submitMessage} >Send Message</button>
                        </div>
                    </div>
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
                            <div className="contactEle">
                                <div className="githubIcon"></div>
                                <div className="gitHubLink"><a href="https://github.com/fantasyzernontra">fantasyzernontra</a></div>
                            </div>
                            <div className="contactEle">
                                <div className="linkedInIcon"></div>
                                <div className="linkedInLink"><a href="https://www.linkedin.com/in/non-nontra/">LinkedIn Profile</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default Contact