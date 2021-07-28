import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里

    //addTodo用于添加一个todo，接受参赛是todo对象
    addTodo = (todoObj) => {
        //获取原todus
        const { todos } = this.state;
        //追加一个todo
        const newTodos = [todoObj, ...todos];
        //更新状态
        this.setState({ todos: newTodos });
    }

    //updateTodo用于更新一个todo对象
    updateTodo = (id, done) => {
        //获取状态中的todos
        const { todos } = this.state;
        //匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done };
            else return todoObj;
        })
        this.setState({ todos: newTodos });
    }

    //handleDelete用于删除一个对象
    deleteTodo = (id) => {
        //获取原来的todos
        const { todos } = this.state;
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        //更新状态
        this.setState({ todos: newTodos });
    }

    //checkAllTodo用于全选
    checkAllTodo = (done) => {
        //获取原来的todos
        const { todos } = this.state;
        //加工数据
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done };
        })
        this.setState({ todos: newTodos })
    }
    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '喝水', done: true }
        ]
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} />
                </div>
            </div>
        )
    }
}
