import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked)
    }

    handleDeleteAll = () => {
        this.props.deleteAllCompleteTodos()
    }

    render() {
        const {todos} = this.props
        const doneCounts = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const totalCounts = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCounts === totalCounts && totalCounts !== 0}
                           onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCounts}</span> / 全部{totalCounts}
                </span>
                <button onClick={this.handleDeleteAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;