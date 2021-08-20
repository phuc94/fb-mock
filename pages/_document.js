import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <title>CV project</title>
                    <meta httpEquiv="Cache-control" content="public"></meta>
                    <link rel="shortcut icon" href="/icon.png"></link>
                    {/* Link */}
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* Javascript Library */}

                </body>
            </Html>
        )
    }
}