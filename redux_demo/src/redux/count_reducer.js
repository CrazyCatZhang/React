import {INCREMENT, DECREMENT} from "./constant";

const initState = 0;

export default function countReducer(prevState = initState, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT: //如果是加
            return prevState + data
        case DECREMENT: //若果是减
            return prevState - data
        default:
            return prevState
    }
}