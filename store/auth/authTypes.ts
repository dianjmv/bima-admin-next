import {IAuthUser, ILoginAdminUser} from "@/interfaces/IAuth";

export interface AuthTypes extends IAuthUser {
    loginUser: boolean
}

export interface LoginType extends ILoginAdminUser {

}


