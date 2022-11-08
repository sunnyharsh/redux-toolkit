import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset, incrementByValue } from "./counterSlice";

const Counter = () => {
    const [number, setNumber]=useState()
    //counterName are given in store
    const count = useSelector((state) => state.counterName.count)
    
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setNumber(e.target.value)
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => {
                    setNumber("")
                    dispatch(reset())
                }}>reset</button>
                <input value={number} name="count" placeholder='Enter your number' onChange={handleChange}/>
                <button onClick={()=>dispatch(incrementByValue(number))}>Add</button>
            </div>
        </div>
    )
}
export default Counter;