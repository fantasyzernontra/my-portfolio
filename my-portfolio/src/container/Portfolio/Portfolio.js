import React from 'react'
import ProjectBox from '../../components/ProjectBox/ProjectBox'

import Aux from '../../hoc/hoc'

import Data from './data'
import './Portfolio.css'

const Portfolio = props => {

    const ProjEle = Data.map((proj, index) => {return (
        <ProjectBox key={index} background={proj.logo} ProjectName={proj.proj_name} BriefDescription={proj.brief_desc} img={proj.pics} modalName={proj.modalName}  desc={proj.desc} techStack={proj.techStack}/>
    )})

    return (
        <Aux>
            <div className="contentWrapper">
                <div className="Header">Portfolio</div>
                <div className="ProjectWrapper">
                    {ProjEle}
                </div>
            </div>  
        </Aux>
    )
}

export default Portfolio