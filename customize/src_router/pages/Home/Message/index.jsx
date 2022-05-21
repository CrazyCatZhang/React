import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
        ]
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) => {
                            return (
                                <li key={messageObj.id}>
                                    {/*传递params参数*/}
                                    {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>*/}

                                    {/*传递search参数*/}
                                    {/*<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>*/}

                                    {/*传递state参数*/}
                                    <Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*接收params参数*/}
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}

                {/*接收search参数*/}
                {/*<Route path="/home/message/detail" component={Detail}/>*/}

                {/*接收state参数*/}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        );
    }
}

export default Message;