import type {AnyToAnyT, AnyToAny2T} from '../utils/types/functions';
import {SEND_TO_OCR, FETCH_BY_ID, CATCH_ERROR} from '../actions/types';

// const ACTION_CASES = {
//     [SEND_TO_OCR]: 'id',
//     [FETCH_BY_ID]: 'response',
//     [CATCH_ERROR]: 'error',
// };

// const createReducer: AnyToAny2T = cases => (state, {type, payload}) =>
//     cases[type]
//         ? {
//               ...state,
//               [cases[type]]: payload,
//           }
//         : state;

// const reducer = createReducer(ACTION_CASES);
// const reducer: AnyToAnyT = (state, {type, payload}) => {
//     switch (type) {
//         case SEND_TO_OCR:
//             return {...state, id: payload};
//         case FETCH_BY_ID:
//             return {...state, status: payload.status, url: payload.url};
//         case CATCH_ERROR:
//             return {...state, error: payload};
//         default:
//             return state;
//     }
// };
const reducer: AnyToAnyT = (state, {payload}) => ({...state, ...payload});
export default reducer;
