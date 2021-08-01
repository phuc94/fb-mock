import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <title>CV project</title>
                    <link rel="icon" href="https://via.placeholder.com/150"></link>
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