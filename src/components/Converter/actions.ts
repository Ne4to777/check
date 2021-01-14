import {createActions} from '../../utils/redux';

export default createActions([
    'convertItemRequested',
    'convertItemResponsed',
    'getItemStatusByIdRequested',
    'getItemStatusByIdResponsed',
    'getItemContentByIdRequested',
    'getItemContentByIdResponsed',
    'getItemsRequested',
    'getItemsResponsed',
    'setGetItemsRequestParams',
    'handleError',
]);
