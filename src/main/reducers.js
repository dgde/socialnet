import { combineReducers } from 'redux';

import sideBarReducer from '../template/side-bar/sideBarReducer';
import headerReducer from '../template/header/headerReducers';

const rootReducer = combineReducers({
    sideBar: sideBarReducer,
    header: headerReducer,
});

export default rootReducer;