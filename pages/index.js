import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MivieWather</title>
        <meta name="description" content="My site for movies watching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo/>
    </div>
  )
}
