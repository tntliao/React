//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//
import React, { Component } from 'react'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'


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


/* 
    1.mapStateToProps函数返回的是一个对象
    2.返回的对象中的key就作为UI组件props的key，value就作为传递给UI组件的value
    3.mapStateTopProps用于传递状态
 */
/* function mapStateToProps(state) {
    return { count: state }
} */

/* 
    1.mapDispathToProps函数返回的是一个对象
    2.返回的对象中的key就作为UI组件props的key，value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
 */
/* function mapDispatchToProps(dispatch) {
    return {
        add: number => dispatch(createIncrementAction(number)),
        reduce: number => dispatch(createDecrementAction(number)),
        asyncAdd: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
} */

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state }),

    //mapDispatchToProps的一般写法
    /* dispatch => ({
        add: number => dispatch(createIncrementAction(number)),
        reduce: number => dispatch(createDecrementAction(number)),
        asyncAdd: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }) */

    //mapDispatchToProps的简写
    {
        add: createIncrementAction,
        reduce: createDecrementAction,
        asyncAdd: createIncrementAsyncAction
    }
)(Count);













