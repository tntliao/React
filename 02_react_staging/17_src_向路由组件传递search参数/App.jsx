import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import About from './pages/About' //路由组件
import Home from './pages/Home' //路由组件
import Header from './components/Header' //一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <Header />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* 原生html中，靠<a>跳转到不同的页面 */}
                                {/*  <a className="list-group-item active" href="./about.html">About</a>
                                <a className="list-group-item" href="./home.html">Home</a> */}

                                {/* 在React中路由链接实现切换组件--编写路由链接 */}
                                <MyNavLink to='/about'>About</MyNavLink>
                                <MyNavLink to='/home'>Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                    <Redirect to='/about' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
