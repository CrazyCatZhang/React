import React, {Component} from 'react';

class SetState extends Component {
    state = {
        count: 0
    }

    addCount = () => {
        this.setState(state => ({count: state.count + 1}))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.addCount}>点我加1</button>
            </div>
        );
    }
}

export default SetState;