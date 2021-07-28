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
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/${item.id}`}>{item.title}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link replace to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接受params参数 */}
                {/* <Route path='/home/message/:id' component={Detail} /> */}

                {/* search参数无需声明接受，正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* state参数无需声明接受，正常注册路由即可 */}
                <Route path='/home/message/detail' component={Detail} />
            </div>
        )
    }
}
