import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {
    //发布
    search = async () => {
        //获取用户的输入(连续结构赋值+重命名)
        const { keyWordElement: { value: keyWord } } = this;
        //发送请求前通知List更新状态
        PubSub.publish('atguigu', { isFirst: false, isLoading: true });

        // #region 使用axios发送请求
        /* axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                PubSub.publish('atguigu', { isLoading: false, users: response.data.items })
            },
            error => {
                PubSub.publish('atguigu', { isLoading: false, err: error.message })
            }
        ) */
        //#endregion

        // #region 未优化的fetch请求
        /* fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了');
                return response.json();
            },
            error => {
                console.log('联系服务器失败了', error);
            }
        ).then(
            response => {
                PubSub.publish('atguigu', { isLoading: false, users: response.items });
                console.log('获取数据成功', response);
            },
            error => {
                PubSub.publish('atguigu', { isLoading: false, err: error.message });
                console.log('获取数据失败', error);
            }
        ) */
        // #endregion

        // #region fetch优化版本一
        /* fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了');
                return response.json();
            }
        ).then(
            response => {
                PubSub.publish('atguigu', { isLoading: false, users: response.items });
                console.log('获取数据成功', response);
            },
        ).catch(
            error => {
                PubSub.publish('atguigu', { isLoading: false, err: error.message });
                console.log('获取数据失败', error);
            }
        ) */
        // #endregion

        //fetch优化版本二
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            const data = await response.json();
            console.log(data);
            PubSub.publish('atguigu', { isLoading: false, users: data.items })
        } catch (error) {
            console.log('请求出错', error);
            PubSub.publish('atguigu', { isLoading: false, err: error.message })
        }

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
