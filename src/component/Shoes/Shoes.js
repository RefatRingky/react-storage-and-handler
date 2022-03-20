import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 50;
    const second = 30;
    const total = multiply(first,second);
    const sum = add(first,second);
    
    return (
        <div>
            <h1>Welcome To My Shoes Shop</h1>
            <p>Total:{total} And Sum:{sum}</p>
        </div>
    );
};

export default Shoes;