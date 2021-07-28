import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
    search = () => {
        //获取用户的输入(连续结构赋值+重命名)
        const { keyWordElement: { value: keyWord } } = this;
        this.props.updateAppState({ isFirst: false, isLoading: true });
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                this.props.updateAppState({ isLoading: false, err: error.message })
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
