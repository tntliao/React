import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        /* users: [
            { id: '01', name: 'jiajia', age: 18 },
            { id: '02', name: 'jack', age: 20 },
            { id: '03', name: 'tom', age: 19 }
        ] */

        users: 'ljj'
    }
    render() {
        return (
            <div className="child">
                <h2>我是Child组件</h2>
                <ul>
                    {
                        this.state.users.map((item) => {
                            return <li key={item.id}>名字：{item.name}年龄：{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
