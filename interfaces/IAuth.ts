import {User} from "@/types/user";
import {Credentials} from "@/types/Credentials";
import {Enterprises} from "@/types/Enterprises";

export interface IAuthUser{
    userLogged: IUserInfo | null;
    credentials: Credentials|null;
}

export interface IUserInfo{
    user: User,
    enterprises: [Enterprises],
}

export interface ILoginAdminUser{
    email: string;
    password: string;
}
