import React, { Component } from 'react'
import './index.css'

/* ################################## */
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
/* ################################## */

export default class A extends Component {

    state = { userName: 'Tom', age: 17 }

    render() {
        const { userName, age } = this.state;
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是:{userName}</h4>
                {/* ############################ */}
                <Provider value={{ userName, age }}>
                    <B />
                </Provider>
                {/* ############################ */}
            </div>
        )
    }
}



class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h4>我的用户名是：</h4>
                <C />
            </div>
        )
    }
}

/* class C extends Component {
    // ############################
    static contextType = MyContext;
    // ############################

    render() {

        const { userName, age } = this.context;

        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名：{userName},年龄：{age}</h4>
            </div>
        )
    }
} */

function C() {
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名：
            <Consumer>
                    {value => {
                        return `${value.userName},年龄：${value.age}`
                    }}
                </Consumer>
            </h4>
        </div>
    )
}