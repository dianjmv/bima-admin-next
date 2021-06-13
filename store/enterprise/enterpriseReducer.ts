import {ADD_ENTERPRISE_SELECTED, EnterpriseActionsType} from "@/store/enterprise/enterpriseActionsType";
import {withClientState} from "@/store/client";


const initialState={
    selected:null
}

export const ENTERPRISE_NAMESPACE = 'enterprise';
function enterpriseBaseReducer(state = initialState, action: EnterpriseActionsType){
    switch (action.type){
        case ADD_ENTERPRISE_SELECTED:
            return{...state, selected:action.selected};

        default:
            return state
    }
}
const enterpriseReducer = withClientState(enterpriseBaseReducer, ENTERPRISE_NAMESPACE);

export default enterpriseReducer;
