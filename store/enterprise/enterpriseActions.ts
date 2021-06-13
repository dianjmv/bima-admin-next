import {ADD_ENTERPRISE_SELECTED, AddEnterpriseSelectedActionType} from "@/store/enterprise/enterpriseActionsType";
import {Enterprises} from "@/types/Enterprises";

export function setEnterprise(enterprise: Enterprises, ):AddEnterpriseSelectedActionType{
    return{
        type: ADD_ENTERPRISE_SELECTED,
        selected: enterprise
    }
}
