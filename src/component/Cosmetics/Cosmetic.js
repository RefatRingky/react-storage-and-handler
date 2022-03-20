import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetic = () => {
    const first = 40;
    const second = 30;
    const total = add(first,second);
    return (
        <div>
            <h1>Welcome To My Cosmetics Store</h1>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetic;