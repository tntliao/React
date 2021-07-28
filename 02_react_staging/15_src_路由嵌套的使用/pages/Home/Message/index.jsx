import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息01' },
            { id: '02', title: '消息02' },
            { id: '03', title: '消息03' }
        ]
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/home/message/${item.id}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path='/home/message/:id' component={Detail} />
            </div>
        )
    }
}
