import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => (
  // <div className="container">
  <div>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <header>
      <h1>Hello world!</h1>
    </header>
    <Layout home>Children</Layout>
  </div>
);

export default Home;
