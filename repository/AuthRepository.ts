import {AccessTokenCredential, Credentials} from "@/types/Credentials";
import axios, {AxiosRequestConfig} from "axios";
import {User} from "@/types/user";
import BimaClient from "@/repository/BimaClient";
import {LoginUserResponseType, ResponseType, UserInfoResponseType} from "@/types/ResponseType";

class AuthRepository{
    private client = new BimaClient()
    private baseUrl = this.client.getUrl();
    private clientKeys = this.client.getKeys();

    public async getAccesCredentials(username:string, password:string): Promise<Credentials>{

        const keys = {
            'grant_type': this.clientKeys.grant_type,
            'client_id': this.clientKeys.client_id,
            'client_secret': this.clientKeys.client_secret,
            'username': username,
            'password': password
        }
        return await axios.post<Credentials>(`${this.baseUrl}/oauth/token`, keys).then(({data}) => data);
    }

    public async getUserInfo(access_token:string): Promise<UserInfoResponseType>{
        const headers= {
            'Authorization': `Bearer ${access_token}`,
            'Accept':'application/json'
        }
        return  await  axios.get(`${this.baseUrl}/api/me`,{headers}).then(({data})=>data);
    }

    public async loginUser(username:string, password:string): Promise<LoginUserResponseType>{
        const body = {
            'email': username,
            'password': password,
            'is_admin':true
        }
        return await axios.post(`${this.baseUrl}/api/login`, body).then(({data})=>data);
    }
}
export default AuthRepository
