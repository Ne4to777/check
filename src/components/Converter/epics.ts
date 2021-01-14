import type {AnyToAnyT} from '../../utils/types/functions';
import type {ObjectT} from '../../utils/types/object';
import {pipe$} from '../../utils/rxjs';
import {ofType} from 'redux-observable';
import {map, pluck, mergeMap} from 'rxjs/operators';
import http from '../../services';
import {fileToBase64} from '../../utils/file';
import actions from './actions';

const pipeHttp$: AnyToAnyT = ([[actionRequested, actionResponsed], fs]) =>
    pipe$([
        ofType(actions[actionRequested]),
        pluck('payload'),
        ...fs,
        mergeMap(p =>
            p.then(actions[actionResponsed]).catch(actions.handleError),
        ),
    ]);

export const getItemsEpic = pipeHttp$([
    ['getItemsRequested', 'getItemsResponsed'],
    [map(http.getItems)],
]);

export const convertItemRequestedEpic = pipeHttp$([
    ['convertItemRequested', 'convertItemResponsed'],
    [
        mergeMap(async (payload: ObjectT) => ({
            ...payload,
            file: await fileToBase64(payload.file),
        })),
        map(http.convertItem),
    ],
]);

export const getItemStatusByIdEpic = pipeHttp$([
    ['getItemStatusByIdRequested', 'getItemStatusByIdResponsed'],
    [map(http.getItemStatusById)],
]);

export const getItemContentByIdEpic = pipeHttp$([
    ['getItemContentByIdRequested', 'getItemContentByIdResponsed'],
    [map(http.getItemContentById)],
]);

export default [
    getItemsEpic,
    convertItemRequestedEpic,
    getItemStatusByIdEpic,
    getItemContentByIdEpic,
];
