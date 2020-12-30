import React, { useState } from 'react'

import Aux from '../../hoc/hoc'
import { useLocation, Link } from 'react-router-dom'

import './NavigationBar.css'

const NavigationBar = props => {
    const path = useLocation().pathname
    const [isOpen, setIsOpen] = useState(false)

    const openNavBar = () => {
        document.querySelector('.wrapper').style.opacity = '1'
        document.querySelector('.wrapper').style.maxHeight = 'auto'
        document.querySelector('.wrapper').style.transform = 'scaleY(1)'
        setIsOpen(true)
    }

    const closeNavBar = () => {
        document.querySelector('.wrapper').style.opacity = '0'
        document.querySelector('.wrapper').style.maxHeight = '0'
        document.querySelector('.wrapper').style.transform = 'scaleY(0)'
        setIsOpen(false)
    }

    return (
        <Aux>
            <div className="Menu" onClick={isOpen ? closeNavBar : openNavBar}>{isOpen ? 'X' : 'Menu' }</div>
            <div className="wrapper">
                <ul id="nav">
                    <li className={path === '/' ? 'active' : ''}><Link to="/" onClick={closeNavBar}>Home</Link></li>
                    <li className={path === '/aboutme' ? 'active' : ''}><Link to="/aboutme" onClick={closeNavBar}>Who Am I ?</Link></li>
                    <li className={path === '/portfolio' ? 'active' : ''}><Link to="/portfolio" onClick={closeNavBar}>Portfolio</Link></li>
                    <li className={path === '/contact' ? 'active' : ''}><Link to="/contact" onClick={closeNavBar}>Contact Me</Link></li>
                </ul>
            </div>
        </Aux>
    )
}

export default NavigationBar