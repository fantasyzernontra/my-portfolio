import React, { useEffect } from 'react'

import Aux from '../../hoc/hoc'
import ProfilePicture from '../../pictures/Skills/ProfilePicture.jpg'

import styles from './Homepage.module.css'

const Homepage = props => {

    useEffect(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.documentElement.dataset.scroll = 0
        document.body.style.backgroundColor = '#132743'
        changeNavLinkColor()
        window.addEventListener('scroll', StartingColorEvent)

        return () => window.removeEventListener('scroll', StartingColorEvent)
    }, [])

    const changeNavLinkColor = () => {
        const NavLink = document.querySelectorAll('#navLink')
        const Nav = document.querySelector('#nav')
        Nav.style.backgroundColor = 'transparent'
        for (let i = 0; i < NavLink.length; i++)
            NavLink[i].style.color = '#fff'
    }

    const StartingColorEvent = () => {
        const Introduc = document.querySelector('#one')
        const IntroText = document.querySelectorAll('#onetext')
        const Nav = document.querySelector('#nav')
        const NavLink = document.querySelectorAll('#navLink')

        const scrolledAmounts = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const supportsAnimationFramed = (window.requestAnimationFrame.constructor === Function);
        if (supportsAnimationFramed) {
            window.requestAnimationFrame(() => {

                const topJa = Introduc.offsetTop
                if (scrolledAmounts <= topJa) {
                    Nav.style.backgroundColor = 'transparent'
                    document.body.style.backgroundColor = '#132743'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#fff'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#fff'
                }
                else {
                    document.body.style.backgroundColor = 'white'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#132743'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#132743'
                }

            })
        } else {
            setTimeout(() => {
                const topJa = Introduc.offsetTop
                if (scrolledAmounts <= topJa) {
                    Nav.style.backgroundColor = 'transparent'
                    document.body.style.backgroundColor = '#132743'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#fff'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#fff'
                }
                else {
                    document.body.style.backgroundColor = 'white'
                    for (let i = 0; i < IntroText.length; i++)
                        IntroText[i].style.color = '#132743'
                    for (let i = 0; i < NavLink.length; i++)
                        NavLink[i].style.color = '#132743'
                }
            }, 500)
        }
    }

    return (
        <Aux>
            <div className={styles.Wrapper}>
                <section className={styles.Introduction} id="one">
                    <div className={styles.Text} id="onetext">Non Nontra<div className={styles.Dot}>.</div></div>
                    <div className={styles.Text} id="onetext">Full Stack Developer<div className={styles.Dot}>.</div></div>
                </section>
                <section className={styles.Briefly} id="two">
                    <div className={styles.IntroContainer}>
                        <div className={styles.profile_pic}><img className={styles.profile_picture} src={ProfilePicture} alt="Non Nontra" /></div>
                        <div className={styles.briefIntro}>I’m a computer science student who hands on with experience on Web-Development. I am interested in technology, data science, business, financial and investment. <br /><br />Moreover, I am a reader and fitness person. </div>
                    </div>
                </section>
            </div>
        </Aux>
    )
}

export default Homepage