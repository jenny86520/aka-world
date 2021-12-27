import '../styles/globals.css'
import "antd/dist/antd.css";
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // TODO: warning: Throttling navigation to prevent the browser from hanging. See <URL>. Command line switch --disable-ipc-flooding-protection can be used to bypass the protection
  // useEffect(() => {
  //   router.push('/about');
  // });

  return <Component {...pageProps} />
}

export default MyApp
