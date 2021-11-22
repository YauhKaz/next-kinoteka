import Head from 'next/head';
import Header from '../conteiner/Header';
import Layout from '../components/Layout';
import HomepageCarousel from '../conteiner/HomepageCarousel';
import HomepageFilter from '../conteiner/HomepageFilter';
import HomepageSubscription from '../conteiner/HomepageSubscription';
import Footer from '../conteiner/footer';
import HomepageBurger from '../components/HomepageBurger';

export default function Home() {

  return (
    <>
      <Head>
        <title>MovieWatcher</title>
        <meta name="description" content="My site for movies watching" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        {/* <HomepageBurger/> */}
        <Header/>
        <HomepageCarousel/>
        <HomepageFilter/>
        <HomepageSubscription/>
        <Footer/>
      </Layout>
    </>
  )
}
