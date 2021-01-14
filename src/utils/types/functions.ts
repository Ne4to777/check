import type {Action} from 'redux';
import type {Observable, OperatorFunction} from 'rxjs';
import type {ActionsObservable, StateObservable} from 'redux-observable';

export type AnyToAnyT = (...xs: any) => any;
export type AnyToAny2T = (...xs: any) => AnyToAnyT;
export type AnyToAny3T = (...xs: any) => AnyToAny2T;
export type AnyToAny4T = (...xs: any) => AnyToAny3T;

export type EpicT = <State>(
    action$: ActionsObservable<Action>,
    state$: StateObservable<State>,
) => ActionsObservable<Action>;

export type PipeT = (
    fs: (
        | ((source: Observable<Action<any>>) => Observable<Action<any>>)
        | OperatorFunction<any, unknown>
    )[],
) => EpicT;
