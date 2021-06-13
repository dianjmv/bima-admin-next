import {toast} from 'react-toastify';
import AuthRepository from "@/repository/AuthRepository";
import {AppThunk} from "@/store/store";
import authSlice from "@/store/auth/authSlice";


const AuthActions = {
    startLogin: state =>{
        state.loading = true
    },
    successLogin: (state, {payload}) =>{
        state.loading = false;
        state.userInfo = payload;
        state.hasError = false;
    },
    failureLogin: (state) =>{
        state.loading = false;
        state.hasError = true;
    },
    removeUserLogged: (state)=>{
        state.userInfo = []
    }
}


export const userLogin = (username:string, password:string): AppThunk => async dispatch => {

    const authRepository = new AuthRepository();
    dispatch( authSlice.actions.startLogin());
    try {
        const {accessToken} = await authRepository.loginUser(username, password)
        const userData = await authRepository.getUserInfo(accessToken);
        dispatch(authSlice.actions.successLogin({...userData}));
        // @ts-ignore
        toast.success(`Bienvenid@ ${userData.user.name}`);

    } catch (err) {
        toast.error('Email o Contraseñas Incorrectos');
        dispatch(authSlice.actions.failureLogin());
    }
};

export default AuthActions;
