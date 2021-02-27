import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import Upload from '@/components/uploadComponents/uploadComponent'
import Text from '@/components/uploadComponents/textUpload'
import BackIcon from '@/components/uploadComponents/backIcon'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
          <title>Lawsign</title>
        </Head>
        <Component {...pageProps} />
        
        {/* COMPONENTES DA PASTA UPLOADCOMPONENTS
        <Upload/>   
        <BackIcon/>
        <Text/> */}
    </Layout>
  );
}
