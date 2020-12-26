import React from 'react'

import Aux from '../../hoc/hoc'
import Modal from '../Modal/Modal'

import './ProjectBox.css'

const ProjectBox = props => {
    const bgUrl = {
        backgroundImage: `url(${props.background.default})`
    }

    const openModalHandler = () => {
        let modal = document.querySelector(`#openModal${props.modalName}`)
        modal.style.opacity = "1"
        modal.style.pointerEvents = 'auto'
    }

    return (
        <Aux>
            <div className={`boxWrapper`} onClick={openModalHandler}>
                <div className="bg" style={bgUrl}></div>
                <div>{props.ProjectName}</div>
            </div>
            <Modal img={props.img} modalName={props.modalName} ProjectName={props.ProjectName} desc={props.desc} techStack={props.techStack} />           
        </Aux>
    )
}

export default ProjectBox