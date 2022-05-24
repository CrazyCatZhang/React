import React, {Component} from 'react';
import SetState from "./components/SetState";
import LazyLoad from "./components/LazyLoad";

class App extends Component {
    render() {
        return (
            <div>
                <SetState/>
                <hr/>
                <LazyLoad/>
            </div>
        );
    }
}

export default App;