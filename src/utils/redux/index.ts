import type {AnyToAny3T, AnyToAny2T, AnyToAnyT} from './../types/functions';
import {connect as connectRedux} from 'react-redux';
import {createAction} from '@reduxjs/toolkit';
import {B} from '../../utils/combinators';
import {mapObject} from '../../utils/object';
import {camelCaseToUpperCase} from '../../utils/string';
import {climb} from '../../utils/object';

export const createReducer: AnyToAny3T = cases => init => (
    state = init,
    {type, payload},
) => {
    const actionCase = cases[type];
    if (!actionCase) return state;
    return {...state, ...actionCase({state, payload})};
};

export const mapDispatchToProps: AnyToAny2T = o => dispatch =>
    mapObject(B(dispatch))(o);

export const createActions: AnyToAnyT = xs =>
    xs.reduce((acc: Record<string, any>, x: string) => {
        acc[x] = createAction(camelCaseToUpperCase(x));
        return acc;
    }, {});

export const connect: AnyToAnyT = ({statePath, actions, view}) =>
    connectRedux(climb(statePath), mapDispatchToProps(actions))(view);
