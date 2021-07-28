import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }

    increase = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({ count: count + Number(value) });
    }
    reduce = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({ count: count - Number(value) });
    }
    increaseOdd = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        if (count % 2 === 0) return;
        this.setState({ count: count + Number(value) });
    }
    increaseAsync = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        setTimeout(() => {
            this.setState({ count: count + Number(value) });
        }, 500)
    }
    render() {
        return (
            <div>
                <h3>当前求和值:{this.state.count}</h3>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increase}>+</button>&nbsp;
                <button onClick={this.reduce}>-</button>&nbsp;
                <button onClick={this.increaseOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.increaseAsync}>异步加</button>
            </div>
        )
    }
}
