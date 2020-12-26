import React from 'react'

import Aux from '../../hoc/hoc'
import { useLocation, Link } from 'react-router-dom'

import './NavigationBar.css'

const NavigationBar = props => {
    const path = useLocation().pathname
    return (
        <Aux>
                <ul id="nav">
                    <li className={path === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                    <li className={path === '/aboutme' ? 'active' : ''}><Link to="/aboutme">Who Am I ?</Link></li>
                    <li className={path === '/portfolio' ? 'active' : ''}><Link to="/portfolio">Portfolio</Link></li>
                    <li className={path === '/contact' ? 'active' : ''}><Link to="/contact">Contact Me</Link></li>
                </ul>
        </Aux>
    )
}

export default NavigationBar