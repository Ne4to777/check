import actions from './actions';
import {connect} from '../../utils/redux';
import view from './view';

export default connect({statePath: ['counter'], actions, view});
