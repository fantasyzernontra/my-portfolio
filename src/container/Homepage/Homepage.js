import React, { useState, useEffect, useCallback } from 'react'

import Aux from '../../hoc/hoc'
import ProfilePicture from '../../pictures/Skills/ProfilePicture.webp'

import styles from './Homepage.module.css'

const Homepage = props => {
    const [slideinStatus1, setSlideInStatus1] = useState(false)
    const [slideinStatus2, setSlideInStatus2] = useState(false)

    const changeNavLinkColor = () => {
        const NavLink = document.querySelectorAll('#navLink')
        const NavWrapper = document.querySelector('.wrapper')
        const HamLine = document.querySelectorAll('.hamLine')
        const navMobile = document.querySelector('.navMobile')
        const navMBele = document.querySelectorAll('#navMBele')
        NavWrapper.style.backgroundColor = 'transparent'
        navMobile.style.backgroundColor = '#132743'
        for (let i = 0; i < NavLink.length; i++)
            NavLink[i].style.color = '#fff'
        for (let i = 0; i < HamLine.length; i++)
            HamLine[i].style.backgroundColor = '#fff'
        for (let i = 0; i < navMBele.length; i++)
            navMBele[i].style.color = '#fff'
    }

    const StartingColorEvent = useCallback(e => {
        const IntroText = document.querySelectorAll('#onetext')
        const NavLink = document.querySelectorAll('#navLink')
        const NavWrapper = document.querySelector('.wrapper')
        const HamLine = document.querySelectorAll('.hamLine')
        const navMBele = document.querySelectorAll('#navMBele')
        const navMobile = document.querySelector('.navMobile')
        const motto = document.querySelector('#MOTTO')
        const intro = document.querySelector('#intro')

        const scrolledAmounts = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const supportsAnimationFramed = (window.requestAnimationFrame.constructor === Function);
        if (supportsAnimationFramed) {
            window.requestAnimationFrame(() => {

                if (scrolledAmounts <= 10) {
                    NavWrapper.style.backgroundColor = 'transparent'
                    NavWrapper.style.boxShadow = '0 0 0 #fff'
                    document.body.style.backgroundColor = '#132743'
                    navMobile.style.backgroundColor = '#132743'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#fff'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#fff'
                    for (let i = 0; i < HamLine.length; i++)
                        HamLine[i].style.backgroundColor = '#fff'
                    for (let i = 0; i < navMBele.length; i++)
                        navMBele[i].style.color = '#fff'
                }
                else {
                    NavWrapper.style.backgroundColor = '#fff'
                    NavWrapper.style.boxShadow = '0 0 0.5em rgba(0, 0, 0, 0.5)'
                    document.body.style.backgroundColor = '#fff'
                    navMobile.style.backgroundColor = '#fff'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#132743'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#132743'
                    for (let i = 0; i < HamLine.length; i++)
                        HamLine[i].style.backgroundColor = '#132743'
                    for (let i = 0; i < navMBele.length; i++)
                        navMBele[i].style.color = '#132743'
                }


                if (scrolledAmounts >= (window.innerWidth > 1080) ? intro.offsetTop : intro.offsetTop + 350)
                    setSlideInStatus2(true)

                if (scrolledAmounts >= (window.innerWidth > 1080) ? motto.offsetTop - 600 : motto.offsetTop + 350)
                    setSlideInStatus1(true)
            })
        } else {
            setTimeout(() => {


                if (scrolledAmounts <= 10) {
                    NavWrapper.style.backgroundColor = 'transparent'
                    NavWrapper.style.boxShadow = '0 0 0 #fff'
                    document.body.style.backgroundColor = '#132743'
                    navMobile.style.backgroundColor = '#132743'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#fff'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#fff'
                    for (let i = 0; i < HamLine.length; i++)
                        HamLine[i].style.backgroundColor = '#fff'
                    for (let i = 0; i < navMBele.length; i++)
                        navMBele[i].style.color = '#fff'
                }
                else {
                    NavWrapper.style.backgroundColor = '#fff'
                    NavWrapper.style.boxShadow = '0 0 0.5em rgba(0, 0, 0, 0.5)'
                    document.body.style.backgroundColor = '#fff'
                    navMobile.style.backgroundColor = '#fff'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#132743'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#132743'
                    for (let i = 0; i < HamLine.length; i++)
                        HamLine[i].style.backgroundColor = '#132743'
                    for (let i = 0; i < navMBele.length; i++)
                        navMBele[i].style.color = '#132743'
                }

                if (scrolledAmounts >= (window.innerWidth > 1080) ? intro.offsetTop : intro.offsetTop + 350)
                    setSlideInStatus2(true)

                if (scrolledAmounts >= (window.innerWidth > 1080) ? motto.offsetTop - 600 : motto.offsetTop + 350)
                    setSlideInStatus1(true)
            }, 500)
        }


    }, [])

    useEffect(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.documentElement.dataset.scroll = 0
        document.body.style.backgroundColor = '#132743'
        changeNavLinkColor()
        window.addEventListener('scroll', StartingColorEvent)

        return () => window.removeEventListener('scroll', StartingColorEvent)
    }, [StartingColorEvent])

    return (
        <Aux>
            <div className={styles.Wrapper}>
                <section className={styles.Introduction} id="one">
                    <div className={styles.Text} id="onetext">Non Nontra<div className={styles.Dot}>.</div></div>
                    <div className={styles.Text} id="onetext">Full Stack Developer<div className={styles.Dot}>.</div></div>
                </section>
                <section className={styles.Motto}>
                    <div className={`${styles.mottoheader} ${slideinStatus1 ? styles.slideIn1 : ''}`}>My motto</div>
                    <div className={`${styles.mottoText} ${slideinStatus1 ? styles.slideIn1 : ''}`} id="MOTTO">If i do something, I would do it PERFECTLY.</div>
                </section>
                <section className={`${styles.Briefly}`} id="intro">
                    <div className={`${styles.IntroContainer} ${slideinStatus2 ? styles.slideIn2 : ''}`}  >
                        <div className={`${styles.profile_pic} `}><img className={styles.profile_picture} src={ProfilePicture} alt="Non Nontra" /></div>
                        <div className={`${styles.briefText} `}>
                            <div className={`${styles.briefIntro} `}>I’m a computer science student who hands on with experience on Web-Development. I am interested in technology, data science, business, financial and investment.</div>
                            <div className={`${styles.briefIntro} `}>Moreover, I am a reader and fitness person. </div>
                        </div>
                    </div>
                </section>
            </div>
        </Aux>
    )
}

export default Homepage