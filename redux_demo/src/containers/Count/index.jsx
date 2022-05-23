import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    createIncrement,
    createDecrement,
    createAsyncIncrement
} from "../../redux/count_action"

class Count extends Component {

    //加法
    incrementCount = () => {
        const {value} = this.selectNumber
        this.props.createIncrement(value * 1)
    }
    //减法
    decrementCount = () => {
        const {value} = this.selectNumber
        this.props.createDecrement(value * 1)
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = this.props.count
        if (count % 2 !== 0) {
            this.props.createIncrement(value * 1)
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.createAsyncIncrement(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.incrementCount}>+</button>
                &nbsp;
                <button onClick={this.decrementCount}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
                &nbsp;
            </div>
        );
    }
}

export default connect(
    state => ({count: state}),
    {
        createIncrement,
        createDecrement,
        createAsyncIncrement
    }
)(Count)