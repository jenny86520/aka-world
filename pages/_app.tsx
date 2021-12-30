import '../styles/globals.css'
import "antd/dist/antd.css";
import styles from '../styles/Home.module.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head';
import { Image, BackTop  } from 'antd';

// log Measuring performance
// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   if (metric.label === 'web-vital') {
//     console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   }
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Aka World</title>
        <meta name="description" content="Aka's introduction website" />
        <link rel="icon" href="/myIcon.png" />
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

export default MyApp