import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import Aux from '../../hoc/hoc'

import MC from '../../pictures/Skills/MC_logo.webp'
import KMUTT from '../../pictures/Skills/KMUTT.webp'
import myself2 from '../../pictures/Skills/myself2.webp'
import myself1 from '../../pictures/Skills/myself.webp'
import books from '../../pictures/Skills/books.webp'
import tennis from '../../pictures/Skills/tennis.webp'
import weight from '../../pictures/Skills/weight.webp'
import data from './data'
import styles from './About.module.css'

const About = props => {
    const [expandingStatus, setExpandingStatus] = useState(false)
    const path = useLocation().pathname

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


    const BarProgressEvent = useCallback(() => {
        const barPro = document.querySelector('.barpro')

        if (barPro) {
            var scrolledAmount = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var supportsAnimationFrame = (window.requestAnimationFrame.constructor === Function);
            if (supportsAnimationFrame && path === '/About') {
                window.requestAnimationFrame(() => {

                    var topAt = window.innerWidth > 1080 ? barPro.offsetTop - 150 : barPro.offsetTop - 200
                    if (scrolledAmount >= topAt && path === '/About') {
                        setExpandingStatus(true)
                    }
                })
            } else {
                setTimeout(() => {
                    var topAt = window.innerWidth > 1080 ? barPro.offsetTop - 150 : barPro.offsetTop - 200
                    if (scrolledAmount >= topAt && path === '/About') {
                        setExpandingStatus(true)
                    }
                }, 500)
            }
        }
    }, [path])

    useEffect(() => {
        window.scrollTo(0, 0)
        window.pageYOffset = 0
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.documentElement.dataset.scroll = 0
        document.body.style.backgroundColor = '#fff'
        changeNavLinkColor()
        window.addEventListener('scroll', BarProgressEvent)

        return () => window.removeEventListener('scroll', BarProgressEvent)
    }, [BarProgressEvent])

    return (
        <Aux>
            <div className={styles.contentWrapper}>
                <div className={`${styles.carousel} carousel`}>
                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="5" annot="I were playing tennis.">
                        <img src={tennis} alt="Tennis" height="400" />
                    </div>


                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="4" annot="This is me while i were weighting.">
                        <img src={weight} alt="Weight Training" height="400" />
                    </div>

                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="3" annot="This are my books.">
                        <img src={books} alt="My Books" height="400" />
                    </div>

                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="2" annot="Non Nontra">
                        <img src={myself1} alt="Non Nontra" height="400" />
                    </div>

                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="1" annot="Non Nontra">
                        <img src={myself2} alt="Non Nontra" height="400" />
                    </div>
                </div>
                <div className={styles.DescCarousel}>Press the box to see the next picture</div>
                <div className={`${styles.introSpeech} introspeech`}>
                    I’m a Thai native. I live in Chiangmai, Nothern region of Thailand.
                    Currently, I’m studying Computer Science at King Mongkut’s University of Technology Thonburi.
                    I do curious and passionate about technology and business. I’m eager to learn  about Data Science, Investment,
                    Financial and so on. I love to changellenge myself. My life won’t be excited If it is lacking.
                </div>
                <div className={`${styles.introSpeech} introspeech`}>
                    I intends to enrich our world to be more liveable with my couple of hands. Moreover, I’m a reader and
                    a fitness person. I love to explore and expand my knowledge throughout the book. I always have an exercise
                    such as running, swimming, tennis, weight training.
                </div>
                <div className={`${styles.introSpeech} introspeech`}>
                If you would like to cooperate with me or would like to have a chat on me with a book or exercise, feel free to contact me.
                </div>
                <section className={`${styles.barContainer} barpro`}>
                    {data.tools.map(tool => {
                        return (<Aux>
                            <div>{tool.toolName}</div>
                            <div className={styles.barBorder}>
                                <div className={`${styles.barValue} ${expandingStatus ? styles.expandingActive : ''}`} style={{ 'width': expandingStatus ? tool.barWidth : 0 }} ></div>
                            </div>
                        </Aux>)
                    })}
                </section>
                <div className={styles.eduContainer}>
                    {data.education.map(edu => {
                        return (<div>
                            <div className={styles.eduEle}>
                                <div className={`${styles.eduImg} test`}>
                                    <img src={edu.schoolName.includes('Montfort') ? MC : KMUTT} alt={edu.schoolName.includes('Montfort') ? 'MC' : 'KMUTT'} width="300" />
                                </div>
                                <div className={styles.eduSchoolName}>{edu.schoolName}</div>
                                <div className={styles.eduEleDetails}>
                                    {edu.dep.map(dept => {
                                        return (<Aux>
                                            <div>{dept}</div>
                                        </Aux>)
                                    })}
                                    <div>{edu.grade}</div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </Aux>


    )
}

export default About