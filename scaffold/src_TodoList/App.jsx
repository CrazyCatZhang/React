import React, {Component} from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
            {id: '004', name: '逛街', done: false}
        ]
    }

    addToDo = (newTodo) => {
        const {todos} = this.state
        const newTodos = [newTodo, ...todos]
        this.setState({todos: newTodos})
    }

    updateToDo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return {...todo, done}
            else return todo
        })
        this.setState({todos: newTodos})
    }

    deleteToDo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({todos: newTodos})
    }

    checkAllTodos = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done}
        })
        this.setState({todos: newTodos})
    }

    deleteAllCompleteTodos = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo={this.addToDo}/>
                    <List todos={todos} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo}/>
                    <Footer todos={todos} checkAllTodos={this.checkAllTodos} deleteAllCompleteTodos={this.deleteAllCompleteTodos}/>
                </div>
            </div>
        );
    }
}

export default App;