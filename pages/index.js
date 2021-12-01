import Head from 'next/head';
import Header from '../conteiner/Header';
import Layout from '../components/Layout';
import HomepageCarousel from '../conteiner/HomepageCarousel';
import HomepageFilter from '../conteiner/HomepageFilter';
import HomepageSubscription from '../conteiner/HomepageSubscription';
import Footer from '../conteiner/footer';
import HomepageBurger from '../components/HomepageBurger';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAllItems } from '../helpers/api-util';
import { load } from '../helpers/db-util';
import { useSelector } from 'react-redux';
import { loadFilms } from '../store/actions';
import { ADD_TOKEN } from '../store/constants';


export default function Home({films, token}) {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch({type: ADD_TOKEN, payload: token});
    dispatch(loadFilms(films));
  }, [dispatch]);

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

export async function getStaticProps() {
  const token = await load();
  const allFilms = await loadAllItems(token);

  return {
    props: {
      films: allFilms,
      token: token,
    },
    revalidate: 1800,
  };
}
