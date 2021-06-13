import {User} from "@/types/user";
import {Enterprises} from "@/types/Enterprises";

export type ResponseType = {
    data: any;
}
export type UserInfoResponseType={
    user: User;
    enterprises: Array<Enterprises>| null;
}

export type LoginUserResponseType = {
    user: User;
    accessToken: string;
}
