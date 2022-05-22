import React, {Component} from 'react';
import {Button, DatePicker} from 'antd'
import {WechatFilled, SearchOutlined} from '@ant-design/icons'

class App extends Component {

    onChange = (date, dateString) => {
        console.log(date, dateString)
    }

    render() {
        return (
            <div>
                App.....
                <hr/>
                <Button type="primary">Primary</Button>
                <Button type="primary" icon={<SearchOutlined/>}>
                    Search
                </Button>
                <hr/>
                <WechatFilled/>
                <hr/>
                <DatePicker onChange={this.onChange}/>
            </div>
        );
    }
}

export default App;