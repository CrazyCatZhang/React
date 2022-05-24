import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPerson} from "../../redux/actions/person";

class Person extends Component {

    handleAddPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value * 1
        const personObj = {id: nanoid(), name, age}
        // console.log(personObj)
        this.props.createAddPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件，上方Count组件的求和为：{this.props.count}</h2>
                <label htmlFor="">
                    <input ref={c => this.nameNode = c} type="text" placeholder="输入姓名"/>
                </label>
                <label htmlFor="">
                    <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                </label>
                <button onClick={this.handleAddPerson}>添加</button>
                <ul>
                    {
                        this.props.personArr.map(person => {
                            return <li key={person.id}>名字：{person.name}---年龄：{person.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({personArr: state.personReducer, count: state.countReducer}),
    {
        createAddPerson
    }
)(Person);