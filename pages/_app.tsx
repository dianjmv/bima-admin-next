import '@/styles/globals.css'
import {useStore} from 'react-redux';
import {useEffect} from "react";
import {load, save, wrapper} from '@/store/store';
import {useApplyClientState} from "@/store/client";
import Layout from "../layouts/Layout";
import {CookiesProvider} from "react-cookie"
import {Provider} from "next-auth/client"
import Amplify from 'aws-amplify'
import config from '@/src/aws-exports'

Amplify.configure({
    ...config,
    ssr: true
})
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
        <Provider session={pageProps.session}>
            <CookiesProvider>
                <Layout headerLayout={'default'}>
                    <Component {...pageProps} />
                </Layout>
            </CookiesProvider>
        </Provider>
    )
}

export default wrapper.withRedux(BimaAdmin);
