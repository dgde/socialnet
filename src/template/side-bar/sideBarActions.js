import { actionTypes, sideBarModes } from '../../globalDefinitions';

export const toggleSideBarMode = sideBarMode => ({
    type: actionTypes.toggleSideBarMode,
    payload: sideBarMode === sideBarModes.lg ? sideBarModes.sm : sideBarModes.lg
});