import React, {Component} from 'react';
import Item from "../Item"
import './index.css'

class List extends Component {
    render() {
        const {todos,updateToDo,deleteToDo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;