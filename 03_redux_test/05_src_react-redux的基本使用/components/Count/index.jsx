import React, { Component } from 'react'

export default class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber;
        this.props.add(Number(value));
    }
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.reduce(Number(value))
    }
    increaseOdd = () => {
        const { value } = this.selectNumber;
        if (this.props.count % 2 === 0) return;
        this.props.add(Number(value));

    }
    increaseAsync = () => {
        const { value } = this.selectNumber;
        this.props.asyncAdd(Number(value), 1000);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>当前求和值:{this.props.count}</h3>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.increaseOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.increaseAsync}>异步加</button>
            </div>
        )
    }
}
