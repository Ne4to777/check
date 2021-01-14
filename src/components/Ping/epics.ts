import {pipe$} from '../../utils/rxjs';
import {filter, mapTo, delay} from 'rxjs/operators';
import actions from './actions';

export const pingEpic = pipe$([
    filter(action => action.type === 'PING'),
    delay(1000),
    mapTo(actions.pong()),
]);

export default [pingEpic];
