import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../conteiner/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieWatcher</title>
        <meta name="description" content="My site for movies watching" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Header/>
      </Layout>
    </div>
  )
}
