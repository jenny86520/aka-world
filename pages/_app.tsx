import '../styles/globals.css'
import "antd/dist/antd.css";
import styles from '../styles/Home.module.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { Image, BackTop  } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Aka World</title>
        <meta name="description" content="Aka's introduction website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BackTop />
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

// solve: warning: Throttling navigation to prevent the browser from hanging. See <URL>. Command line switch --disable-ipc-flooding-protection can be used to bypass the protection
function usePush(): NextRouter['push'] {
  const router = useRouter();
  const routerRef = useRef(router);

  routerRef.current = router;

  const [{ push }] = useState<Pick<NextRouter, 'push'>>({
    push: path => routerRef.current.push(path),
  });
  return push;
}

export default MyApp