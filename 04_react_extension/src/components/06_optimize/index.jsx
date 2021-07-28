import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

    state = { name: 'liaojiajia' }

    changeName = () => {
        this.setState({ name: '廖家嘉' })
        // this.setState({})
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('当前' + this.state, this.props);
        console.log('准备' + nextProps, nextState);
        if (this.state.name === nextState.name) return false
        else return true;
    } */

    render() {
        console.log('Parent--render');
        const { name } = this.state;
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的名字是：{name}</span>&nbsp;
                <button onClick={this.changeName}>切换名字</button>
                <Child />
            </div>
        )
    }
}

class Child extends PureComponent {

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('当前' + this.state, this.props);
        console.log('准备' + nextProps, nextState);
        if (this.props.name === nextProps.name) return false
        else return true;
    } */

    render() {
        console.log('Child--render');
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接受到的名字是：{this.props.name}</span>
            </div >
        )
    }
}