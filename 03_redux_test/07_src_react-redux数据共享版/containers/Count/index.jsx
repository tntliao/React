//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//
import React, { Component } from 'react'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'


class Count extends Component {

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
                <h2>我是Count组件,下方组件的总人数为{this.props.persons.length}</h2>
                <h4>当前求和值:{this.props.count}</h4>
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

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state.count, persons: state.persons }),
    //mapDispatchToProps的简写
    {
        add: createIncrementAction,
        reduce: createDecrementAction,
        asyncAdd: createIncrementAsyncAction
    }
)(Count);













