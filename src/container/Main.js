import React from 'react'

import Aux from '../hoc/hoc'
import { Route, Switch, withRouter } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

const Main = props => {

    return (
        <Aux>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/About" component={About} />
                <Route path="/Work" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
            </Switch>
        </Aux>
    )
}

export default withRouter(Main)