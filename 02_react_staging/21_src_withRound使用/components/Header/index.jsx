import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    go = () => {
        this.props.history.go(1)
    }
    goBack = () => {
        this.props.history.goBack()
    }
    goForward = () => {
        this.props.history.goForward()
    }

    render() {
        console.log('Header组件', this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.go}>go</button>
                <button onClick={this.goBack} >goBack</button>
                <button onClick={this.goForward} >goForward</button>
            </div>
        )
    }
}
export default withRouter(Header)