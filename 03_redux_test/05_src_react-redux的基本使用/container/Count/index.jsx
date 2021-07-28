//引入Count的UI库
import CountUI from '../../components/Count'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

/* 
    1.mapStateToProps函数返回的是一个对象
    2.返回的对象中的key就作为UI组件props的key，value就作为传递给UI组件的value
    3.mapStateTopProps用于传递状态
 */
function mapStateToProps(state) {
    return { count: state }
}

/* 
    1.mapDispathToProps函数返回的是一个对象
    2.返回的对象中的key就作为UI组件props的key，value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
 */
function mapDispatchToProps(dispatch) {
    return {
        add: number => dispatch(createIncrementAction(number)),
        reduce: number => dispatch(createDecrementAction(number)),
        asyncAdd: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);