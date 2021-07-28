import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props;
        return (
            <div>
                <div className="row">
                    {
                        /* 
                            第一次打开网页显示 欢迎使用，输入关键词，随后点击搜索
                            点击搜索就会把 isFirst 改成false就会执行 正在搜索
                            结果返回 isLoading 变成false
                            在执行后面 err  ##err里面有东西就会为true
                         */
                        isFirst ? <h2>欢迎使用，输入关键词，随后点击搜索</h2> :
                            isLoading ? <h2>Loding...</h2> :
                                err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                    users.map((userObj) => {
                                        return (
                                            <div key={userObj.id} className="card">
                                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                    <img src={userObj.avatar_url} alt="jiajia" style={{ width: '100px' }} />
                                                </a>
                                                <p className="card-text">{userObj.login}</p>
                                            </div>
                                        )
                                    })
                    }
                </div>
            </div>
        )
    }
}
