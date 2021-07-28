import React, { Component } from 'react'
import { Button, Layout, Menu, Dropdown } from 'antd';
import { GithubOutlined, DownOutlined } from '@ant-design/icons'
// import './App.less'

const { Header, Content, Sider, Footer } = Layout;


export default class App extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item</a>
                </Menu.Item>
                <Menu.Item icon={<DownOutlined />} disabled>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item</a>
                </Menu.Item>
                <Menu.Item disabled>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item</a>
                </Menu.Item>
                <Menu.Item danger>a danger item</Menu.Item>
            </Menu>
        )
        return (
            <div>
                <Layout>
                    <Header>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </Header>
                    <Layout>
                        <Content>
                            <GithubOutlined />
                        </Content>
                        <Sider>
                            <Button type="primary">Primary Button</Button>
                        </Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}
