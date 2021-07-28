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

    pushShow = (id) => {
        //携带params参数
        // this.props.history.push('/home/message/detail/' + id)

        //携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&name='jia'`)

        //携带state参数
        this.props.history.push({ pathname: `/home/message/detail/${id}`, state: { id, title: 'jia' } })
    }
    replaceShow = (id) => {
        //携带params参数
        // this.props.history.replace('/home/message/detail/' + id)

        //携带search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&name='jia'`)

        //携带state参数
        this.props.history.replace({ pathname: `/home/message/detail/${id}`, state: { id, title: 'jia' } })
    }

    go = () => {
        this.props.history.go(1)
    }
    goBack = () => {
        this.props.history.goBack()
    }
    goForward = () => {
        this.props.history.goForward()
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
                                    {/* <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}>{item.title}</Link>
                                    <button onClick={() => this.pushShow(item.id)}>push</button>
                                    <button onClick={() => this.replaceShow(item.id)}>replace</button>
                                </li>

                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接受params参数 */}
                {/* <Route path='/home/message/detail/:id' component={Detail} /> */}

                {/* search参数无需声明接受，正常注册路由即可 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* state参数无需声明接受，正常注册路由即可 */}
                <Route path='/home/message/detail' component={Detail} />
                <button onClick={this.go}>go</button>
                <button onClick={this.goBack} >goBack</button>
                <button onClick={this.goForward} >goForward</button>
            </div>
        )
    }
}
