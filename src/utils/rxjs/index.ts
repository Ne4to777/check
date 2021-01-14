import type {PipeT} from './../types/functions';
import {methodApply} from './../object';

export const pipe$: PipeT = fs => methodApply('pipe')(...fs);
