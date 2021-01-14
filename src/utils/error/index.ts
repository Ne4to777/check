import type {AnyToAnyT} from '../../utils/types/functions';

export const throwError: AnyToAnyT = x => {
    throw new Error(x);
};
