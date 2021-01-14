import type {AnyToAnyT} from '../../utils/types/functions';
import React from 'react';

const View: AnyToAnyT = ({isPinging, ping}) => (
    <div>
        <div>{isPinging ? 'PING' : 'PONG'}</div>
        <button onClick={ping}> PING </button>
    </div>
);

export default View;
