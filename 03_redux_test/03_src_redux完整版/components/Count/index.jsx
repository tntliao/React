import React, { Component } from 'react'
//引入store，用于获取redux中保存的状态
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber;
        store.dispatch(createIncrementAction(Number(value)))
    }
    decrement = () => {
        const { value } = this.selectNumber;
        store.dispatch(createDecrementAction(Number(value)))
    }
    increaseOdd = () => {
        const { value } = this.selectNumber;
        const count = store.getState()
        console.log(count);
        if (count % 2 === 0) return;
        store.dispatch(createIncrementAction(Number(value)))
    }
    increaseAsync = () => {
        const { value } = this.selectNumber;
        setTimeout(() => {
            store.dispatch(createIncrementAction(Number(value)))
        }, 500)
    }
    render() {
        return (
            <div>
                <h3>当前求和值:{store.getState()}</h3>
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
