import React, { Component } from 'react'

class Layout extends Component {

    state = {

    }

    render () {
        return (
            <div id="Layout">
                Header
                { this.props.children }
                Footer
            </div>
        )
    }
}

export default Layout