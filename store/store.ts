import rootReducer from './root/rootReducer';
import version from './version';


import {configureStore, ThunkAction} from '@reduxjs/toolkit'
import {Action} from 'redux';
import {createWrapper} from "next-redux-wrapper";


export const save = (state: any) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export const load = () => {
    if (!process.browser) {
        return undefined;
    }

    let state;

    try {
        state = localStorage.getItem('state');

        if (typeof state === 'string') {
            state = JSON.parse(state);
        }

        if (state && state.version !== version) {
            state = undefined;
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
    return state || undefined;
};


type RootState = ReturnType<typeof rootReducer>;

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
export const wrapper = createWrapper(makeStore)


