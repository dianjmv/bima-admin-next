import { Provider } from 'next-auth/client'
export default function Security ({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    )
}
