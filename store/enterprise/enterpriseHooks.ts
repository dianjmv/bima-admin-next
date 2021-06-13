import {useAppAction, useAppSelector} from "@/store/hooks";
import {ENTERPRISE_NAMESPACE} from "@/store/enterprise/enterpriseReducer";
import {setEnterprise} from "@/store/enterprise/enterpriseActions";

export const useEnterprise = () => useAppSelector(state => state[ENTERPRISE_NAMESPACE]);
export const useSetEnterprise =()=> useAppAction(setEnterprise)
