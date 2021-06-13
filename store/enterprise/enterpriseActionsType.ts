import {Enterprises} from "@/types/Enterprises";

export const ADD_ENTERPRISE_SELECTED = 'ADD_ENTERPRISE_SELECTED'
import {AppAction} from "@/store/types";
export interface AddEnterpriseSelectedActionType  {
    type: typeof ADD_ENTERPRISE_SELECTED
    selected: Enterprises
}

export type EnterpriseActionsType= AddEnterpriseSelectedActionType;

export type EnterpriseThunkActionType<T = void> = AppAction<EnterpriseActionsType, T>;
