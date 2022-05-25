import React, {useState} from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";

function Message() {

    const [messages] = useState([
        {id: '001', title: '消息一', content: '锄禾日当午'},
        {id: '002', title: '消息二', content: '汗滴禾下土'},
        {id: '003', title: '消息三', content: '谁知盘中餐'},
        {id: '004', title: '消息四', content: '粒粒皆辛苦'}
    ])

    const navigate = useNavigate()

    function showDetail(message) {
        navigate(`detail/${message.id}/${message.title}/${message.content}`)
    }

    return (
        <div>
            <ul>
                {
                    messages.map(message => {
                        return (
                            <li key={message.id}>
                                <Link
                                    to={`detail/${message.id}/${message.title}/${message.content}`}>{message.title}</Link>
                                &nbsp;
                                <button onClick={() => showDetail(message)}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    );
}

export default Message;