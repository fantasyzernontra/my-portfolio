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
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={`${process.env.PUBLIC_URL}/About`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL}/Work`} component={Portfolio} />
                <Route exact path={`${process.env.PUBLIC_URL}/Contact`} component={Contact} />
            </Switch>
        </Aux>
    )
}

export default withRouter(Main)