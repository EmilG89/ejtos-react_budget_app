import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <div>
                Budget: £
                <input 
                    type='number'
                    step='10'
                    value = {budget}
                    >
                </input>
            </div>
        </div>
    );
};
export default Budget;
