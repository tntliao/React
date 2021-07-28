import React, { Component } from 'react'
import '../Footer/index.css'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    render() {
        const { todos } = this.props;
        //获取已完成个数
        const denoCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0);
        //获取总个数
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={denoCount === total && total !== 0 ? true : false} onClick={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{denoCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" >清除已完成任务</button>
            </div>
        )
    }
}
