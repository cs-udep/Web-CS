import React from 'react'
import '../styles/globals.css';
import { Layout } from './Componentes';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps : {session, ...pageProps}  }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
