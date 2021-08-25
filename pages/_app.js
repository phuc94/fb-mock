import '../styles/global.css'
import {  Head } from 'next/document';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { getBasicUserData } from '../redux/actionCreator';
import { useCookies } from 'react-cookie';

function MyApp({ Component, pageProps }) {
    // const [cookie, setCookie] = useCookies(['user']);
    // store.dispatch(getBasicUserData(cookie.user));
    return (
        // <Provider store={store}>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        // </Provider>
    )
};

export default MyApp;