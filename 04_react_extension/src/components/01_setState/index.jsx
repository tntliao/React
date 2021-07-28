import React, { Component } from 'react'

export default class App extends Component {

    state = ({ count: 0 });

    add = () => {
        const { count } = this.state;

        //对象式组件
        /* this.setState({ count: count + 1 }, function () {
            console.log(this.state.count);
        }) */

        //函数式组件
        this.setState((state, props) => {
            return { count: state.count + 1 }
        }, () => {
            console.log(count);
        })
    }

    render() {
        return (
            <div>
                <h1>当前和为:{this.state.count}</h1>
                <button onClick={this.add}>按钮</button>
            </div>
        )
    }
}
