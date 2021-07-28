import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'liao', age: '18' }]
export default function personReducer(personObj = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON: //若是添加一个人
            return [data, ...personObj];
        default:
            return personObj;
    }
}