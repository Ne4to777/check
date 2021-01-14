import './declarations';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Converter from './components/Converter';
import Counter from './components/Counter';
import Ping from './components/Ping';

render(
    <Provider store={store}>
        {/* <Ping /> */}
        {/* <Counter /> */}
        <Converter />
    </Provider>,
    document.getElementById('root'),
);
