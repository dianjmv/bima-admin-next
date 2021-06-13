import { useAppAction, useAppSelector } from '../hooks';
import authSlice, { AUTH_NAMESPACE } from './authSlice';
import {userLogin} from "@/store/auth/authActions";


export const useAuthInfo = () => useAppSelector(state => state[AUTH_NAMESPACE]);
export const useRemoveUserLogged = () => useAppAction(authSlice.actions.removeUserLogged);
export const useLogin =()=>useAppAction(userLogin);
