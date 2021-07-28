import React, { Component, createRef, useContext, useRef, useState } from 'react'
import reactDOM from 'react-dom';

//类式组件
/* class Demo extends Component {
    state = { count: 1 }
    myRef = React.createRef()

    add = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }
    unMount = () => {
        reactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    show = () => {
        console.log(this.myRef.current.value);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(state => ({ count: state.count + 1 }))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unMount}>卸载组件</button>
                <button onClick={this.show}>展示数据</button>
            </div>
        )
    }
} */

function Demo() {
    const [state, setState] = useState(0);
    const myRef = useRef();

    function add() {
        setState(state => state + 1)
    }
    function unMount() {
        reactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show() {
        console.log(myRef.current.value);
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            setState(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为{state}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unMount}>卸载组件</button>
            <button onClick={show}>展示数据</button>
        </div>
    )
}

export default Demo;