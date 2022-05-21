import React, {Component} from 'react';
import axios from 'axios'

class Search extends Component {

    handleSearch = () => {
        const {keyWordsElement: {value: keyWord}} = this
        this.props.updateAppState({
            isFirst: false,
            isLoading: true
        })
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({
                    users: response.data.items,
                    isLoading: false
                });
            },
            error => {
                this.props.updateAppState({
                    error: error.message,
                    isLoading: false
                })
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(c) => {
                        this.keyWordsElement = c
                    }} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
