import React, { useRef, useEffect, useCallback } from 'react'

import Aux from '../../hoc/hoc'

import './Modal.css'

const Modal = props => {
    const slideIndexRef = useRef(null)
    let carouselImg = null

    const closeHandler = e => {
        if (e.target.id.includes('openModal') || e.target.id.includes('closeBTN')) {
            document.querySelector(`#openModal${props.modalName}`).style.opacity = '0'
            document.querySelector(`#openModal${props.modalName}`).style.pointerEvents = 'none'
            const navLink = document.querySelector('#Work')
            navLink.classList.add('active')
            document.querySelector('.wrapper').style.zIndex = '20'
        }
    }

    const propIMG = props.img
    carouselImg = propIMG.map((img, index) => {
        let photo = require(`../../pictures/${img.src}`)
        return (
            <img className={`slides${props.modalName}`} key={index} src={photo.default} alt={img.alt} width="100%" />
        )
    })

    const generateTechStack = techstack => {
        return techstack.map((ts, index) => {
            return (
                <span key={index}>{ts}</span>
            )
        })
    }

    const showDivs = useCallback((n) => {
        const slideDom = document.getElementsByClassName(`slides${props.modalName}`)
        if (n > slideDom.length) {
            slideIndexRef.current = 1
        }
        if (n < 1) {
            slideIndexRef.current = slideDom.length
        }
        for (let i = 0; i < slideDom.length; i++) {
            slideDom[i].style.opacity = "0";
            slideDom[i].style.display = "none";
        }
        slideDom[slideIndexRef.current - 1].style.display = "block";
        slideDom[slideIndexRef.current - 1].style.opacity = '1';

    }, [props.modalName])

    useEffect(() => {
        slideIndexRef.current = 1
        showDivs(slideIndexRef.current)
    }, [showDivs])


    return (
        <Aux>
            <div id={`openModal${props.modalName}`} className="modalDialog" onClick={e => closeHandler(e)}>
                <div>
                    <div className="closeDiv">
                        <button onClick={closeHandler} className="close" id="closeBTN">X</button>
                    </div>
                    <div>
                        <div className="carouselImg">
                            {carouselImg}
                        </div>
                        <div className="buttonImg">
                            <button onClick={() => {
                                showDivs(slideIndexRef.current -= 1)
                            }}>
                                &#10094;
                        </button>
                            <button onClick={() => {
                                showDivs(slideIndexRef.current += 1)
                            }}>
                                &#10095;
                        </button>
                        </div>
                    </div>
                    <div className="ProjectDetail">
                        <div className="header">{props.ProjectName}</div>
                        <div className="desc">
                            {props.desc}
                        </div>
                        <div className="techStack">Tech Stack</div>
                        <div>
                            {generateTechStack(props.techStack)}
                        </div>
                    </div>
                </div>
            </div>
        </Aux >
    )
}

export default Modal