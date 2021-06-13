import {
    CLICKED_SIDEBAR,
    CLOSE_SIDEBAR,
    CloseSidebarActionType,
    OPEN_SIDEBAR,
    OpenSidebarActionType,
    SideBarClickedActionType
} from "@/store/sidebar/sidebarActionsType";

export function openSidebar(): OpenSidebarActionType {
    return {
        type: OPEN_SIDEBAR,
    };
}

export function closeSidebar(): CloseSidebarActionType {
    return {
        type: CLOSE_SIDEBAR,
    };
}

export function clickedSidebar(): SideBarClickedActionType{
    return {
        type: CLICKED_SIDEBAR
    }
}

