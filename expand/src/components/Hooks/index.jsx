import React from 'react';
import {root} from "../../index";

function Hooks() {

    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount(count + 1)
    }

    function unmount() {
        root.unmount()
    }

    return (
        <div id="hooks" className="hooks">
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    );
}

export default Hooks;