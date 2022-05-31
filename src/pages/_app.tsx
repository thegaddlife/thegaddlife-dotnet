import '@styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PageNav from '@components/pageNav';
import PageFooter from '@components/pageFooter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WebMob Site</title>
      </Head>

      <PageNav></PageNav>
      {/* <MenuDropdown></MenuDropdown> */}
      <Component {...pageProps} />
      {/* <PageFooter></PageFooter> */}
    </>
  );
}

export default MyApp;
