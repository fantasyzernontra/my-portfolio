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
        NavWrapper.style.boxShadow = '0 0 0.5em rgba(0, 0, 0, 0.5)'
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

    const [msgStatus, setMsgStatus] = useState('')
    const [validated, setValidated] = useState({
        emailValidated: '',
        textAreaValidated: ''
    })

    const inputChangeHandler = e => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    const emailValidation = () => {
        if (message.email === '') {
            setValidated({ ...validated, emailValidated: 'Please enter your email' })
            return false
        }
        else if (!message.email.includes(`@`)) {
            setValidated({ ...validated, emailValidated: 'Please use the proper form of email.' })
            return false
        }
        else {
            setValidated({ ...validated, emailValidated: '' })
            return true
        }

    }

    const textAreaValidation = () => {
        if (message.msg === '') {
            setValidated({ ...validated, textAreaValidated: 'Please say something.' })
            return false;
        }
        else {
            setValidated({ ...validated, textAreaValidated: '' })
            return true;
        }
    }

    const submitMessage = async () => {

        const emailChecked = emailValidation()
        const textAreaChecked = textAreaValidation()

        if (!emailChecked || !textAreaChecked)
            return setMsgStatus('Please enter your email and message.')

        await fetch('https://nonnontra-portfolioapi.azurewebsites.net/recieveMessage', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        }).then(data => {
            setMsgStatus('Your message has sent.')
        }).catch(err => setMsgStatus('Something went wrong. Please try again.'))
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
                            <div className="validatedBox"></div>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text" onChange={inputChangeHandler} value={message.email} onBlur={emailValidation} />
                            <div className="validatedBox">{validated.emailValidated}</div>
                            <label html="msg">Your Message</label>
                            <textarea name="msg" rows="3" onChange={inputChangeHandler} value={message.msg} onBlur={textAreaValidation} />
                            <div className="validatedBox">{validated.textAreaValidated}</div>
                        </div>
                        <div className="buttonDiv">
                            <div className='msgStatus'>{msgStatus}</div>
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