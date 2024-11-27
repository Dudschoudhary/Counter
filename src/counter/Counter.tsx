import React, { useState } from "react"
import {counter} from '../type/type'

const Counter:React.FC<counter> = ({initialCount}) => {

    const [count, setCount] = useState<number>(initialCount)

    const increment = () =>  setCount(count + 1);
    const decrement = () =>{if(count > 0){ setCount(count - 1)}}
  return (
    <div>
        <p>Counter:-  {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter