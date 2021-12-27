import '../styles/globals.css'
import "antd/dist/antd.css";
import type { AppProps } from 'next/app'
import { useRouter, NextRouter } from 'next/router';
import { useState, useEffect, useRef,  } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const routerPush = usePush()
  useEffect(() => {
    routerPush('/about');
  }, [routerPush]);
  
  return <Component {...pageProps} />
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