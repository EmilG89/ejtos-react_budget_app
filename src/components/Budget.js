import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
   const changeBudget = (val) => {

    dispatch({
        type: 'SET_BUDGET',
        payload: val,
    })
   }

    return (
        <div className='alert alert-secondary'>
            <div>
                <lable>Budget:{currency}</lable>
                <input 
                    type='number'
                    step='10'
                    max={20000}
                    value={budget}
                    onChange={(event) => changeBudget(event.target.value)}
                    >
                </input>
            </div>
        </div>
    );
};
export default Budget;

