import type {AnyToAnyT} from '../types/functions';
import {B, C} from '../../utils/combinators';

const persistEvent: AnyToAnyT = e => e.persist() || e;
export const composeWithPersist = C(B)(persistEvent);
