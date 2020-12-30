import React, { useEffect } from 'react'

import Aux from '../../hoc/hoc'

import './Modal.css'

import { showDivs } from '../../utils/CarouselUtil'

const Modal = props => {
    let slideIndex = 1;
    let carouselImg = null

    useEffect(() => {
        showDivs(slideIndex, document.getElementsByClassName(`slides${props.modalName}`), slideIndex)
    }, [slideIndex, props.modalName])

    const closeHandler = () => {
        document.querySelector(`#openModal${props.modalName}`).style.opacity = '0'
        document.querySelector(`#openModal${props.modalName}`).style.pointerEvents = 'none'
    }

    const propIMG = props.img
    carouselImg = propIMG.map((img, index) => {
        let photo = require(`../../pictures/${img.src}`)
        return (
            <img className={`slides${props.modalName}`} key={index} src={photo.default} alt={img.alt} width="100%" />
        )
    })

    const generateTechStack = techstack => {
        return techstack.map(ts => {
            return (
                <span>{ts}</span>
            )
        })
    }

    return (
        <Aux>
            <div id={`openModal${props.modalName}`} className="modalDialog">
                <div>
                    <div className="closeDiv"> 
                        <button onClick={closeHandler} className="close">X</button>
                    </div>
                    <div>
                        <div className="carouselImg">
                            {carouselImg}
                        </div>
                        <div className="buttonImg">
                            <button onClick={() => showDivs(slideIndex += -1, document.getElementsByClassName(`slides${props.modalName}`), slideIndex)}>
                                &#10094;
                        </button>
                            <button onClick={() => showDivs(slideIndex += 1, document.getElementsByClassName(`slides${props.modalName}`), slideIndex)}>
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