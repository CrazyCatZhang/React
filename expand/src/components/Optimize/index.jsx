import React, {PureComponent} from 'react';
import './index.css'

class Parent extends PureComponent {

    state = {
        carName: 'Porsche'
    }
    
    change = ()=>{
        this.setState({carName: 'Ferrari'})
    }

    render() {
        const {carName} = this.state
        console.log('Parent-render')
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{carName}</span>
                <br/>
                <button onClick={this.change}>换车</button>
                <Child/>
            </div>
        );
    }
}

class Child extends PureComponent {
    render() {
        console.log('Child-render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                {/*<span>我接到的车的名字是：{this.props.carName}</span>*/}
            </div>
        )
    }
}

export default Parent;