import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="A simple project stater to work with Typescript, React, NextJS and Styled-Components"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
