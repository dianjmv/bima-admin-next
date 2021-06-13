
import {AppReducerStateType} from "@/store/types";
import sidebarReducer from "@/store/sidebar/sidebarReducer";
import enterpriseReducer from "@/store/enterprise/enterpriseReducer";
import authSlice from "@/store/auth/authSlice";

export interface RootState {
    version: number;
    auth: AppReducerStateType<typeof authSlice.reducer>;
    sidebar:AppReducerStateType<typeof sidebarReducer>;
    enterprise: AppReducerStateType<typeof enterpriseReducer>;
}

