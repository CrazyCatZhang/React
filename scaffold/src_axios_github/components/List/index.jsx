import React, {Component} from 'react';
import './index.css'

class List extends Component {
    render() {
        const {users, isFirst, isLoading, error} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字搜索....</h2> :
                        isLoading ? <h2>Loading.....</h2> :
                            error ? <h2 style={{color: 'red'}}>{error}</h2> :
                                users.map((user) => {
                                    return (
                                        <div key={user.id} className="card">
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img alt='avatars' src={user.avatar_url} style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;