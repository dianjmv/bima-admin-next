import {useAppAction, useAppSelector} from "../hooks";
import {SIDEBAR_NAMESPACE} from "@/store/sidebar/sidebarReducer";
import {clickedSidebar, closeSidebar, openSidebar} from "@/store/sidebar/sidebarActions";

export const useSideBar = () => useAppSelector(state => state[SIDEBAR_NAMESPACE]);
export const useOpenSidebar =()=>useAppAction(openSidebar);
export const useCloseSidebar = ()=> useAppAction(closeSidebar)
export const useClickSidebar = ()=> useAppAction(clickedSidebar)
