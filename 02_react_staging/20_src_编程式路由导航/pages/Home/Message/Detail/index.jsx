import React, { Component } from 'react'
import qs from 'querystring' //react一同下载

//urlencoded

export default class index extends Component {

    render() {

        const data = [
            { id: '01', title: '消息01', content: '你好，我是廖家嘉' },
            { id: '02', title: '消息02', content: '今天是2021.5.31' },
            { id: '03', title: '消息03', content: '星期一晚上21：03' }
        ]
        console.log(this.props);
        //接受params参数
        // const { id } = this.props.match.params;

        //接受search参数
        /* const { search } = this.props.location; //这个为字符串类似的数据
        const { id, name } = qs.parse(search.slice(1));
        console.log(id, name); */
        // 接受state参数
        const { id, title } = this.props.location.state || {};

        const newData = data.find((item) => {
            return item.id === id;
        }) || {}

        return (
            <ul>
                <li>ID:{newData.id}</li>
                <li>TITLE:{newData.title}</li>
                <li>Message:{newData.content}</li>
                {/* <li>ID:</li>
                <li>TITLE:</li>
                <li>Message:</li> */}
            </ul>
        )
    }
}
