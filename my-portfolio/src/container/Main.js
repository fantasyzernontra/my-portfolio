import React from 'react'

import Aux from '../hoc/hoc'
import { Route, Switch, withRouter } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

import './Main.css'

const Main = props => {

    return (
        <Aux>
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