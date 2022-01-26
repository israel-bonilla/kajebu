import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Kajebu Business Platform</title>
        <meta name="description" content="Online Knowledge Business Suite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Ready!</h1>
      <button onClick={() => router.push('/dashboard')}>Go to Dashboard</button>
    </div>
  )
}
