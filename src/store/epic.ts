import {combineEpics} from 'redux-observable';
import pingEpics from '../components/Ping/epics';
import converterEpics from '../components/Converter/epics';

const epics = [...pingEpics, ...converterEpics];

export default combineEpics(...epics);
