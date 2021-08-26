import '../styles/global.css'
import {  Head } from 'next/document';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { getBasicUserData } from '../redux/actionCreator';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(()=>{
        if(!cookie.user && !router.pathname.includes('login')){
            router.push('/login');
        }
    },[])
    const [cookie, setCookie] = useCookies(['user']);
    if (cookie.user){
        store.dispatch(getBasicUserData(cookie.user));
    }
    return (
        <Provider store={store}>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </Provider>
    )
};

export default MyApp;