import {User} from "@/types/user";
import {Credentials} from "@/types/Credentials";
import {AppAction} from "@/store/types";

export const ADD_USER_LOGGED = 'ADD_USER_LOGGED';
export const REMOVE_USER_LOGGED = 'REMOVE_USER_LOGGED';
export const LOGIN_ADMIN_USER = 'LOGIN_ADMIN_USER';
export const LOGIN_FETCH_START = 'LOGIN_FETCH_START';
export const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
export const LOGIN_FETCH_ERROR = 'LOGIN_FETCH_ERROR'

export interface AddUserLoggedActionType {
    type: typeof ADD_USER_LOGGED;
    userLogged: User;
    credentials: Credentials;
    have_enterprise: boolean;
}

export interface LoginUserActionType {
    type: typeof LOGIN_ADMIN_USER;
}

export interface LoginFetchStartActionType {
    type: typeof LOGIN_FETCH_START;
}

export interface LoginFetchSuccessActionType {
    type: typeof LOGIN_FETCH_SUCCESS;
    user: User | null;
    access_token: string | null;
    enterprises: [];
}

export interface LoginFetchErrorActionType {
    type: typeof LOGIN_FETCH_ERROR;
}

export interface RemoveUserLoggedActionType {
    type: typeof REMOVE_USER_LOGGED;
}

export type AuthActionsType =
    AddUserLoggedActionType
    | RemoveUserLoggedActionType
    | LoginUserActionType
    | LoginFetchStartActionType
    | LoginFetchSuccessActionType
    | LoginFetchErrorActionType;

export type AuthThunkAction<T = void> = AppAction<AuthActionsType, T>;
