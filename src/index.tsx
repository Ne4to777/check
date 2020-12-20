import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Converter from './components/Converter';

render(
    <Provider store={store}>
        <Converter />
    </Provider>,
    document.getElementById('root'),
);
