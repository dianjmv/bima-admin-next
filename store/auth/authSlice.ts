import {createSlice} from "@reduxjs/toolkit";
import AuthActions from "@/store/auth/authActions";

export const initialState ={
    loading: false,
    hasError: false,
    userInfo: {},
    stateFrom: 'client',
}

export const AUTH_NAMESPACE = 'auth'

const authSlice = createSlice({
    name: AUTH_NAMESPACE,
    initialState,
    reducers: AuthActions
})

export default authSlice;



