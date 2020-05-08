import { actionTypes } from '../../globalDefinitions';

const INITIAL_STATE = { showUserDropDownMenu: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.toggleUserDropDownMenu:
            return {
                ...state,
                showUserDropDownMenu: action.payload
            }
        case actionTypes.doNotShowUserDropDownMenu:
            return {
                ...state,
                showUserDropDownMenu: false
            } 
        default:
            return state;
    }
}