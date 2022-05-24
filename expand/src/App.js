import React, {Component} from 'react';
import SetState from "./components/SetState";
import LazyLoad from "./components/LazyLoad";
import Hooks from "./components/Hooks";

class App extends Component {
    render() {
        return (
            <div>
                <SetState/>
                <hr/>
                <LazyLoad/>
                <hr/>
                <Hooks/>
            </div>
        );
    }
}

export default App;