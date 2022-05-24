import React from 'react';

function Hooks() {

    const [count, setCount] = React.useState(0)

    function add() {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我加1</button>
        </div>
    );
}

export default Hooks;