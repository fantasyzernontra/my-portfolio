import React from 'react'

import Aux from '../../hoc/hoc'
import { useLocation } from 'react-router-dom'

import './NavigationBar.css'

const NavigationBar = props => {
    const path = useLocation().pathname
    return (
        <Aux>
                <ul id="nav">
                    <li className={path === '/' ? 'active' : ''}><a href="/">Home</a></li>
                    <li className={path === '/aboutme' ? 'active' : ''}><a href="/aboutme">Who Am I ?</a></li>
                    <li className={path === '/portfolio' ? 'active' : ''}><a href="/portfolio">Portfolio</a></li>
                    <li className={path === '/contact' ? 'active' : ''}><a href="/contact">Contact Me</a></li>
                </ul>
        </Aux>
    )
}

export default NavigationBar