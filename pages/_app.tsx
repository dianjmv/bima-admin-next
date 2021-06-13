import '@/styles/globals.css'
import {useStore} from 'react-redux';
import {useEffect} from "react";
import {load, save, wrapper} from '@/store/store';
import {useApplyClientState} from "@/store/client";
import Layout from "../layouts/Layout";
import {CookiesProvider} from "react-cookie"


function BimaAdmin({Component, pageProps}) {
    const store = useStore();
    const applyClientState = useApplyClientState();
    useEffect(() => {
        const state = load();
        console.log(state)
        if (state) {
            applyClientState(state);
        }
        if (process.browser) {
            store.subscribe(() => {
                save(store.getState());
            });
        }
    }, [store]);


    return (
        <CookiesProvider>
            <Layout headerLayout={'default'}>
                <Component {...pageProps} />
            </Layout>
        </CookiesProvider>)

}

export default wrapper.withRedux(BimaAdmin);
