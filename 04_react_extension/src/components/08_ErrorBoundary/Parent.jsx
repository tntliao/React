import React, { Component } from 'react'
import Child from './Child'
import './index.css'
export default class Parent extends Component {

    state = { hasError: '' }

    static getDerivedStateFromError(error) {
        console.log('@@@@@' + error);
        return { hasError: error }
    }

    render() {
        
        console.log(this.state.hasError);

        return (
            <div className="parent">
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h3>网络状态不好，请稍后重试</h3> : <Child />}
            </div>
        )
    }
}
