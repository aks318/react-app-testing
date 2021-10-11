import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {

    const [counterValue , setCounterValue] = useState(0)
    const [inputValue , setInputValue] = useState(1)

    return (
        <div>
            <h3 data-testid = "header">My Counter</h3>
            <h2 data-testid = "counter"
                className = {`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`} 
            >{counterValue}</h2>
            <button data-testid = "subtract-btn" onClick = {(e) => setCounterValue(counterValue - inputValue)}>-</button>
            <input className = "text-center" 
            data-testid = "input" 
            type = "number" 
            value = {inputValue}
            onChange = {(e) => {
                setInputValue(parseInt(e.target.value))
            }}
            />
            <button data-testid = "add-btn" onClick = {(e) => setCounterValue(counterValue + inputValue)}>+</button>
        </div>
    )
}

export default Counter
