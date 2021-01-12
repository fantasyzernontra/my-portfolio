import React, { useEffect } from 'react'
import ProjectBox from '../../components/ProjectBox/ProjectBox'

import Aux from '../../hoc/hoc'

import Data from './data'
import './Portfolio.css'

const Portfolio = props => {

    useEffect(() => {
        window.scrollTo(0,0)
        window.pageYOffset = 0
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        document.documentElement.dataset.scroll = 0
        document.body.style.backgroundColor = '#fff'
        changeNavLinkColor()
    }, [])

    const changeNavLinkColor = () => {
        const NavLink = document.querySelectorAll('#navLink')
        const NavWrapper = document.querySelector('.wrapper')
        const HamLine = document.querySelectorAll('.hamLine')
        const navMobile = document.querySelector('.navMobile')
        const navMBele = document.querySelectorAll('#navMBele')
        NavWrapper.style.backgroundColor = '#fff'
        navMobile.style.backgroundColor = '#fff'
        for (let i = 0; i < NavLink.length; i++)
            NavLink[i].style.color = '#132743'
        for (let i = 0; i < HamLine.length; i++)
            HamLine[i].style.backgroundColor = '#132743'
        for (let i = 0; i < navMBele.length; i++)
            navMBele[i].style.color = '#132743'
    }

    const ProjEle = Data.map((proj, index) => {return (
        <ProjectBox key={index} background={proj.logo} ProjectName={proj.proj_name} BriefDescription={proj.brief_desc} img={proj.pics} modalName={proj.modalName}  desc={proj.desc} techStack={proj.techStack}/>
    )})

    return (
        <Aux>
            <div className="contentWrapper">
                <div className="Header">Work</div>
                <div className="ProjectWrapper">
                    {ProjEle}
                </div>
            </div>  
        </Aux>
    )
}

export default Portfolio