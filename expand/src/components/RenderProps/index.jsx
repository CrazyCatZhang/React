import React, {Component} from 'react';
import './index.css'
import SetState from "../SetState";

class RenderProps extends Component {
    render() {
        return (
            <div className='parent'>
                <h2>我是Parent组件</h2>
                <A render={() => <SetState/>}/>
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div className="child">
                <h2>我是A组件</h2>
                {this.props.render()}
            </div>
        );
    }
}

export default RenderProps;