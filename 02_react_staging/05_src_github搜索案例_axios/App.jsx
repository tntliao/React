import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = { //初始化状态
        users: [],//users初始值为数组
        isFirst: true,//是否为第一次打开页面
        isLoding: false,//标识是否处于加载中
        err: ''//储存请求相关的错误信息
    };

    updateAppState = (satteObj) => {
        // this.setState({ satteObj: satteObj });
        this.setState(satteObj); //重名了就简写
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState} />
                    <List {...this.state} />
                </div>
            </div>
        )
    }
}
