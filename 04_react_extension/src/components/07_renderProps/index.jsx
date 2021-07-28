import React, { Component } from 'react'
import C from '../01_setState'
import './index.css'

export default class Parent extends Component {

    state = { name: 'Tom' }

    render() {
        const { name } = this.state;
        return (
            <div className="parent">
                <h2>我是Parent组件</h2>
                <A name={name} render={(name) => { return <C name={name} /> }} />
            </div>
        )
    }
}

class A extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className="a">
                <h2>我是A组件</h2>
                {
                    this.props.render(name)
                }
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div className="b">
                <h2>我是B组件，名字：{this.props.name}</h2>
            </div>
        )
    }
}