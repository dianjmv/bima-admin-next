import {combineReducers} from 'redux';
import version from '../version';

import sidebarReducer, {SIDEBAR_NAMESPACE} from "@/store/sidebar/sidebarReducer";
import enterpriseReducer, {ENTERPRISE_NAMESPACE} from "@/store/enterprise/enterpriseReducer";
import authSlice, {AUTH_NAMESPACE} from "@/store/auth/authSlice";

export default combineReducers(
    {
        version: (state: number = version) => state,
        [AUTH_NAMESPACE]: authSlice.reducer,
        [SIDEBAR_NAMESPACE]: sidebarReducer,
        [ENTERPRISE_NAMESPACE]: enterpriseReducer
    })
