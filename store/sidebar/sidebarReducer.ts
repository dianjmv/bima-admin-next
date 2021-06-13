import {withClientState} from "@/store/client";
import {CLICKED_SIDEBAR, CLOSE_SIDEBAR, OPEN_SIDEBAR, SidebarActionsType} from "@/store/sidebar/sidebarActionsType";

const initialState = {
    open: false
};
export const SIDEBAR_NAMESPACE = 'sidebar';

function sidebarBaseReducer(state = initialState, action: SidebarActionsType) {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {...state, open: true}
        case CLOSE_SIDEBAR:
            return {...state, open: false }
        case CLICKED_SIDEBAR:
            return {...state, open: !state.open}
        default:
            return state;
    }
}

const sidebarReducer = withClientState(sidebarBaseReducer, SIDEBAR_NAMESPACE);

export default sidebarReducer;
