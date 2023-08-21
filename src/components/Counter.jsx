import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , incrementByMount , selectCounter } from '../features/counter/counterSlice';

const Counter = () => {
    const counter = useSelector(selectCounter)
    const dispatch = useDispatch();
    const [value,setValue]= useState(2);
    return (
        <div>
            {counter}
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="number" value={value} onChange={e=>setValue(e.target.value)} />
                <button onClick={() => dispatch(incrementByMount(+value))}>amount +</button>

            </div>
        </div>
    );
};

export default Counter;