import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Fragment } from "react"
import Head from 'next/head'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>UGC-аналитика</title>
      <link ref="icon" href="/favicom.ico"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>;
}
export default App;