import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => { console.log('成功了', response.data); },
            error => { console.log('失败了', error); }
        )
    }

    getCardDate = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => { console.log('成功了', response.data); },
            error => { console.log('失败了', error); }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点击获取学生信息</button>
                <button onClick={this.getCardDate}>点击获取汽车信息</button>
            </div>
        )
    }
}
