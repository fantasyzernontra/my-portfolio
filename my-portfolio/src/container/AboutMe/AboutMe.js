import React from 'react'

import Aux from '../../hoc/hoc'

import ProfilePicture from '../../pictures/ProfilePicture.jpg'
import MCLOGO from '../../pictures/MC_logo.png'
import KMUTT from '../../pictures/KMUTT.png'
import Java from '../../pictures/Java.svg'
import HTML from '../../pictures/html.png'
import CSS from '../../pictures/CSS.png'
import JS from '../../pictures/javascript.png'
import ReactJS from '../../pictures/React.png'
import Vue from '../../pictures/vue.png'
import NodeJS from '../../pictures/node.png'
import ReactNative from '../../pictures/react-native.png'
import Docker from '../../pictures/docker.png'
import Kubernetes from '../../pictures/kubernetes.png'
import NGINX from '../../pictures/nginx.png'
import SQL from '../../pictures/sql.png'
import Photoshop from '../../pictures/photoshop.png'
import PremierePro from '../../pictures/premiere_pro.png'
import Imovie from '../../pictures/imovie.png'
import Blender from '../../pictures/blender.png'
import Office365 from '../../pictures/office365.webp'

import './AboutMe.css'

const AboutMe = props => {
    return (
        <Aux>
            <div className="contentWrapper">
                {/* Introduction Section */}
                <div className="introduction">
                    <div className="introductionEle1">
                        <div className="Header">
                            Who Am I?
                        </div>
                        <div className="Descrip">
                            I’m a sophomore computer science student who hands-on with experience in Web-Development as “Full-Stack Developer” and Software Development. <br />And I’m curious about business and start-up.
                        </div>
                    </div>
                    <div className="introductionEle2">
                        <img className="profile_picture" src={ProfilePicture} alt="Non Nontra" />
                    </div>
                </div>
                {/* Education Section */}
                <div className="Header AnotherHeader" >Education</div>
                <div className="education">
                    <div className="Montfort">
                        <img src={MCLOGO} alt="Montfort College Logo" width="300" />
                        <div className="Subheader">Montfort College Secondary School</div>
                        <div>
                            High School 2012 - 2018<br />
                            Science - Math Program<br />
                            GIFTED THAI Program<br />
                            GPAX 3.25
                        </div>
                        <div className="EducationLocation">
                            <button onClick={() => window.location.href = "https://www.montfort.ac.th/"}>
                                Montfort Website
                            </button>
                            <button onClick={() => window.location.href = "https://goo.gl/maps/kfkbSdDWE9ueN7Tg6"}>
                                Montfort Location
                            </button>
                        </div>
                    </div>
                    <div className="KMUTT">
                        <img src={KMUTT} alt="KMUTT Logo" width="300" />
                        <div className="Subheader">King Mongkut's University of Technology Thonburi</div>
                        <div>
                            University 2019 - Now<br />
                            Bachelor of Computer Science <br />
                            School of Information Technology<br />
                            GPAX 3.29
                        </div>
                        <div className="EducationLocation">
                            <button onClick={() => window.location.href = "https://www.kmutt.ac.th/"}>
                                KMUTT Website
                            </button>
                            <button onClick={() => window.location.href = "https://goo.gl/maps/Av7iZz7NQzPkgUZh7"}>
                                KMUTT Location
                            </button>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="Header AnotherHeader">Skills</div>
                <div className="SkillsSubheader">Programming Language</div>
                <div className="ProgramLang">
                    {/* Row 1 */}
                    <div><img src={Java} alt="Java" height="150" /></div>
                    <div><img src={HTML} alt="HTML" height="150" /></div>
                    <div><img src={CSS} alt="CSS" height="130" /></div>
                    <div><img src={JS} alt="Javascript" height="100" /></div>
                </div>

                <div className="SkillsSubheader">Tools &amp; Frameworks</div>
                <div className="ToolFramework">
                    {/* Row 1 */}
                    <div><img src={ReactJS} alt="ReactJS" height="150" /></div>
                    <div><img src={Vue} alt="VueJS" height="120" /></div>
                    <div><img src={NodeJS} alt="NodeJS" height="100" /></div>
                    <div><img src={ReactNative} alt="ReactNative" height="150" /></div>
                    {/* Row 2 */}
                    <div><img src={Docker} alt="Docker" height="130" /></div>
                    <div><img src={Kubernetes} alt="Kubernetes" height="90" /></div>
                    <div><img src={NGINX} alt="NGINX" height="50" /></div>
                    <div><img src={SQL} alt="SQL" height="100" /></div>
                </div>

                <div className="SkillsSubheader">Graphic</div>
                <div className="Graphic">
                    <div><img src={Photoshop} alt="Photoshop" height="130" /></div>
                    <div><img src={PremierePro} alt="PremierePro" height="130" /></div>
                    <div><img src={Imovie} alt="Imovie" height="130" /></div>
                    <div><img src={Blender} alt="Blender" height="130" /></div>
                </div>

                <div className="SkillsSubheader">Documentation</div>
                <div className="Documentation">
                    <div><img src={Office365} alt="Office365" height="130" className="office365" /></div>
                </div>

                {/* Language Section */}
                <div className="Header AnotherHeader">Language</div>
                <div className="Language">
                    <div className="ThaiEnglish LanguageSubHeader">
                        <div>Thai</div>
                        <div>|</div>
                        <div>Native</div>
                        <div>English</div>
                        <div>|</div>
                        <div>Intermediate</div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default AboutMe