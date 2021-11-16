import Head from 'next/head';
import Header from '../conteiner/Header';
import Layout from '../components/Layout';
import Carousel from '../conteiner/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>MovieWatcher</title>
        <meta name="description" content="My site for movies watching" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Header/>
        <Carousel/>
      </Layout>
    </>
  )
}
