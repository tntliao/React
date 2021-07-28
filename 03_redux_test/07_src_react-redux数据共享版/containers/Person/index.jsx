import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }
    render() {
        return (
            <div>
                <h2>我是Person组件,上方组件和为{this.props.count}</h2>
                <input type="text" ref={c => this.nameNode = c} placeholder="输入名字" />
                <input type="text" ref={c => this.ageNode = c} placeholder="输入年龄" />
                <button onClick={this.addPerson} >添加</button>
                <ul>
                    {
                        this.props.persons.map((item) => {
                            return <li key={item.id}>{item.name}--{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ count: state.count, persons: state.persons }), //映射状态
    { addPerson: createAddPersonAction }//映射操作方法
)(Person)