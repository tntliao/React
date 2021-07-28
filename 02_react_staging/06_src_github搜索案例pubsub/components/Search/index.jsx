import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {
    //发布
    search = () => {
        //获取用户的输入(连续结构赋值+重命名)
        const { keyWordElement: { value: keyWord } } = this;
        PubSub.publish('atguigu', { isFirst: false, isLoading: true });

        //使用axios发送
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                PubSub.publish('atguigu', { isLoading: false, users: response.data.items })
            },
            error => {
                PubSub.publish('atguigu', { isLoading: false, err: error.message })
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={value => this.keyWordElement = value} type="text" placeholder="输入关键词点击搜索" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
