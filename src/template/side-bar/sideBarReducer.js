import { actionTypes, sideBarModes } from '../../globalDefinitions';

const INITIAL_STATE = { sideBarMode: sideBarModes.lg };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.toggleSideBarMode:
            return {
                ...state,
                sideBarMode: action.payload
            }
        default:
            return state;
    }
}