import '../styles/global.css'
import {  Head } from 'next/document';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
    
    return (
        <CookiesProvider>
            <Component {...pageProps} />
        </CookiesProvider>
    )
};

export default MyApp;