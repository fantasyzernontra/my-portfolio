import React from 'react'

import Aux from '../../hoc/hoc'
import { useLocation, Link } from 'react-router-dom'

import './NavigationBar.css'

const NavigationBar = props => {
    const path = useLocation().pathname


    const debounce = (fn) => {
        let frame;
        return (...params) => {
            if (frame) {
                cancelAnimationFrame(frame);
            }

            frame = requestAnimationFrame(() => {
                fn(...params);
            });
        }
    };

    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    }

    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    storeScroll();
    return (
        <Aux>
            <div className="wrapper">
                <ul id="nav">
                    <li className={path === '/' ? 'active' : ''} ><Link to="/" id="navLink">Home</Link></li>
                    <li className={path === '/About' ? 'active' : ''} ><Link to="/About" id="navLink">About</Link></li>
                    <li className={path === '/Work' ? 'active' : ''} ><Link to="/Work" id="navLink">Work</Link></li>
                    <li className={path === '/Contact' ? 'active' : ''} ><Link to="/Contact" id="navLink">Contact</Link></li>
                </ul>
            </div>
        </Aux>
    )
}

export default NavigationBar