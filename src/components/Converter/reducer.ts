import type {ObjectOfAnyToAnyT} from '../../utils/types/object';
import {createReducer} from '../../utils/redux';
import actions from './actions';
import state from './state';

const reduceMap: ObjectOfAnyToAnyT = {
    [actions.convertItemRequested]: () => ({}),
    [actions.convertItemResponsed]: ({payload}) => ({id: payload.id}),
    [actions.getItemStatusByIdRequested]: () => ({}),
    [actions.getItemStatusByIdResponsed]: ({payload}) => ({
        url: payload.output.url,
        status: payload.step,
    }),
    [actions.getItemContentByIdRequested]: () => ({}),
    [actions.getItemContentByIdResponsed]: ({payload}) => ({
        content: payload,
    }),
    [actions.getItemsRequested]: () => ({}),
    [actions.getItemsResponsed]: ({payload}) => ({items: payload}),
    [actions.setGetItemsRequestParams]: ({
        state: {
            itemsRequestParams: {count, status},
        },
        payload,
    }) => ({
        itemsRequestParams: {
            count: payload.count ?? count,
            status: payload.status ?? status,
        },
    }),
    [actions.handleError]: ({payload}) => ({error: payload.message}),
};

export default createReducer(reduceMap)(state);
