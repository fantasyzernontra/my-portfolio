import React, { useState, useEffect } from 'react'

import Aux from '../../hoc/hoc'

import MC from '../../pictures/Skills/MC_logo.png'
import KMUTT from '../../pictures/Skills/KMUTT.png'
import myself2 from '../../pictures/Skills/myself2.JPG'
import myself1 from '../../pictures/Skills/myself.jpeg'
import books from '../../pictures/Skills/books.jpeg'
import tennis from '../../pictures/Skills/tennis.jpeg'
import weight from '../../pictures/Skills/weight.jpeg'
import data from './data'
import styles from './About.module.css'

const About = props => {
    const [expandingStatus, setExpandingStatus] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
        window.pageYOffset = 0
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.documentElement.dataset.scroll = 0
        document.body.style.backgroundColor = '#fff'
        changeNavLinkColor()
        window.addEventListener('scroll', BarProgressEvent)

        return () => window.removeEventListener('scroll', BarProgressEvent)
    }, [])

    const changeNavLinkColor = () => {
        const NavLink = document.querySelectorAll('#navLink')
        const Nav = document.querySelector('#nav')
        Nav.style.backgroundColor = '#fff'
        for (let i = 0; i < NavLink.length; i++)
            NavLink[i].style.color = '#132743'
    }


    const BarProgressEvent = () => {
            const barPro = document.querySelector('.barpro')
            
            var scrolledAmount = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var supportsAnimationFrame = (window.requestAnimationFrame.constructor === Function);
            if (supportsAnimationFrame) {
                window.requestAnimationFrame(() => {

                    var topAt = barPro.offsetTop - 200;
                    if (scrolledAmount >= topAt) {
                        setExpandingStatus(true)
                    }
                })
            } else {
                setTimeout(() => {
                    var topAt = barPro.offsetTop;
                    if (scrolledAmount >= topAt) {
                        setExpandingStatus(true)
                    }
                }, 500)
            }
    }

    return (
        <Aux>
            <div className={styles.contentWrapper}>
                <div className={`${styles.carousel} carousel`}>
                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="5" annot="I were playing tennis.">
                        <img src={tennis} alt="Tennis" height="400px" />
                    </div>


                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="4" annot="This is me while i were weighting.">
                        <img src={weight} alt="Weight Training" height="400px" />
                    </div>

                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="3" annot="This are my books.">
                        <img src={books} alt="My Books" height="400px" />
                    </div>

                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="2" annot="Non Nontra">
                        <img src={myself1} alt="Non Nontra" height="400px" />
                    </div>

                    <input type="checkbox" className={styles.faux_ui_facia} />
                    <div className={styles.slide} slide="1" annot="Non Nontra">
                        <img src={myself2} alt="Non Nontra" height="400px" />
                    </div>
                </div>
                <div className={styles.DescCarousel}>Clickable</div>
                <section className={`${styles.introSpeech} introspeech`}>
                    I’m a Thai native. I live in Chiangmai, Nothern region of Thailand.
                    Currently, I’m studying Computer Science at King Mongkut’s University of Technology Thonburi.
                    I do curious and passionate about technology and business. I’m eager to learn  about Data Science, Investment,
                    Financial and so on. I love to changellenge myself. My life won’t be excited If it is lacking.
                    <br /><br />
                    I intends to enrich our world to be more liveable with my couple of hands. Moreover, I’m a reader and
                    a fitness person. I love to explore and expand my knowledge throughout the book. I always have an exercise
                    such as running, swimming, tennis, weight training.
                    <br /><br />
                    If you would like to cooperate with me or would like to have a chat on me with a book or exercise, feel free to contact me.
                </section>
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
                                <div className={styles.eduImg}>
                                    <img src={edu.schoolName.includes('Montfort') ? MC : KMUTT} alt={edu.schoolName.includes('Montfort') ? 'MC' : 'KMUTT'} width="300" />
                                </div>
                                <div className={styles.eduSchoolName}>{edu.schoolName}</div>
                                <div>{edu.desc}</div>
                                {edu.dep.map(dept => {
                                    return (<Aux>
                                        <div>{dept}</div>
                                    </Aux>)
                                })}
                                <div>{edu.grade}</div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </Aux>


    )
}

export default About