import { actionTypes } from '../../globalDefinitions';

export const toggleUserDropDownMenu = showUserDropDownMenu => ({
    type: actionTypes.toggleUserDropDownMenu,
    payload: showUserDropDownMenu === true ? false : true
});

export const doNotShowUserDropDownMenu = () => ({
    type: actionTypes.doNotShowUserDropDownMenu
});