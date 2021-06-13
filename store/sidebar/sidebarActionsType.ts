export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const CLICKED_SIDEBAR = 'CLICKED_SIDEBAR'


export interface OpenSidebarActionType {
    type: typeof OPEN_SIDEBAR;
}

export interface CloseSidebarActionType {
    type: typeof CLOSE_SIDEBAR;
}

export interface SideBarClickedActionType {
    type: typeof CLICKED_SIDEBAR
}


export type SidebarActionsType =
    OpenSidebarActionType
    | CloseSidebarActionType
    | SideBarClickedActionType;


