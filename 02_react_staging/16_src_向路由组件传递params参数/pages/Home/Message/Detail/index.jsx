import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const data = [
            { id: '01', title: '消息01', content: '你好，我是廖家嘉' },
            { id: '02', title: '消息02', content: '今天是2021.5.31' },
            { id: '03', title: '消息03', content: '星期一晚上21：03' }
        ]

        const { id } = this.props.match.params;

        const newData = data.find((item) => {
            return item.id === id;
        })

        return (
            <ul>
                <li>ID:{newData.id}</li>
                <li>TITLE:{newData.title}</li>
                <li>Message:{newData.content}</li>
            </ul>
        )
    }
}
