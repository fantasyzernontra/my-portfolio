import React from 'react'

import Aux from '../hoc/hoc'
import { Route, Switch, withRouter, useLocation } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './Main.css'

const Main = props => {
    const location = useLocation()

    return (
        <Aux>
            {/* <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 300, exit:300}}
                    classNames="fade" 
                >
                    <section className="route-section">
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route path="/aboutme" component={AboutMe} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup> */}
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Aux>
    )
}

export default withRouter(Main)