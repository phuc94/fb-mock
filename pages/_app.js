import '../styles/global.css'
import {  Head } from 'next/document';

import { io } from "socket.io-client";

function MyApp({ Component, pageProps }) {
    const socket= io();
    console.log(socket)
    return <Component {...pageProps} />
};

export default MyApp;