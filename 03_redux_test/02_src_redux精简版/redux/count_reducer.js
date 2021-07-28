/*
    1.该文件是用于创建一个为Count组件服务的reducer，renducer的本质就是一个函数
    2.renducer函数会接到两个参数，分别为：之前的状态(perState)，动作对象(action)
 */

const initState = 0;//初始化状态
export default function countReducer(perState = initState, action) {
    //从action对象中获取：type、data
    const { type, data } = action;
    //根据type决定如何加工数据
    switch (type) {
        case 'increment':
            return perState + data;
        case 'decrement':
            return perState - data;
        default:
            return perState;
    }
}