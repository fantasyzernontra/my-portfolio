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

    const openNavBar = () => {
        document.querySelector('.navMobile').style.height = '100%';
        document.querySelector('.navMobile').style.opacity = '1';
    }

    const closeNavBar = () => {
        document.querySelector('.navMobile').style.height = '0%';
        document.querySelector('.navMobile').style.opacity = '.5';

    }
    
    return (
        <Aux>
            <div className="wrapper">
                <ul id="nav">
                    <li className={path === '/' ? 'active' : ''} id="fs"><Link to="/" id="navLink">Home</Link></li>
                    <li className={path === '/About' ? 'active' : ''} id="fs"><Link to="/About" id="navLink">About</Link></li>
                    <li className={path === '/Work' ? 'active' : ''} id="Work"><Link to="/Work" id="navLink">Work</Link></li>
                    <li className={path === '/Contact' ? 'active' : ''} id="fs"><Link to="/Contact" id="navLink">Contact</Link></li>
                </ul>
                <div className="hamburgerContainer">
                    <div className="hamburger" onClick={openNavBar}>
                        <div className="hamLine"></div>
                        <div className="hamLine"></div>
                        <div className="hamLine"></div>
                    </div>
                </div>
            </div>
            <div className="navMobile">
                <div className="closeBtn" onClick={closeNavBar} id="navMBele">X</div>
                <div><Link to="/" onClick={closeNavBar} id="navMBele">Home</Link></div>
                <div><Link to="/About" onClick={closeNavBar} id="navMBele">About</Link></div>
                <div><Link to="/Work" onClick={closeNavBar} id="navMBele">Work</Link></div>
                <div><Link to="/Contact" onClick={closeNavBar} id="navMBele">Contact</Link></div>
            </div>
        </Aux>
    )
}

export default NavigationBar