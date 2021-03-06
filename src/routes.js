import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

/**==============================
 * ROUTES
 ===============================*/

import Home from './components/home/home'
import Layout from './components/hoc/layout/layout'

class Routes extends Component {
    render () {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes