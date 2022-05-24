import React from 'react';
import ReactDOM from "react-dom/client";

function Hooks() {

    const [count, setCount] = React.useState(0)
    
    const myRef = React.useRef()

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
        ReactDOM.createRoot(document.getElementById('hooks')).unmount()
    }
    
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div id="hooks" className="hooks">
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我展示</button>
        </div>
    );
}

export default Hooks;