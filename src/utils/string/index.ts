import type {AnyToAnyT} from '../types/functions';

const UPPERCASE_SPLIT_RE = /([A-Z][a-z0-9]+)/;
const LOW_DASH = '_';

const toUpperCase: AnyToAnyT = x => x.toUpperCase();

export const camelCaseToUpperCase: AnyToAnyT = x =>
    x.split(UPPERCASE_SPLIT_RE).filter(Boolean).map(toUpperCase).join(LOW_DASH);
