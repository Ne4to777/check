import type {AnyToAnyT} from '../../utils/types/functions';
import React from 'react';

const View: AnyToAnyT = ({value, increment, decrement}) => (
    <div>
        <div>{value}</div>
        <button onClick={increment}> +1 </button>
        <button onClick={decrement}> -1 </button>
    </div>
);

export default View;
