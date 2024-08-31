import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    let addOne = () => {
        setCount(++count);
    }
    let subtractOne = () => {
        setCount(--count);
    }

    return (
        <div className="counter">
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button className="minus" onClick={subtractOne}>- Минус</button>
            <button className="plus" onClick={addOne}>Плюс +</button>
        </div>
    )
}

export default Counter;