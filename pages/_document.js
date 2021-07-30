import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <title>CV project</title>

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