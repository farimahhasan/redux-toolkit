import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment , decrement, selectNumber  } from '../features/number/numberSlice';

const Number = () => {
    const number = useSelector(selectNumber)
    const dispatch = useDispatch();
    return (
        <div>
            {number}
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    );
};

export default Number;