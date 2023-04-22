import Layout from '@/components/layout/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      </Head>
      <OverlayScrollbarsComponent defer style={{ height: '100vh', width: '100vw', display: 'flex' }} options={{ scrollbars: { theme: 'os-theme-light' } }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OverlayScrollbarsComponent>
    </>
  )
}
