import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../conteiner/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieWatcher</title>
        <meta name="description" content="My site for movies watching" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
    </div>
  )
}
