import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { FunctionComponent } from 'react';
import Particles from 'react-tsparticles';
// import Particles from 'react-particles-js';
// import { tsParticles } from 'tsparticles';

const Home: FunctionComponent = () => (
  // <div className="container">
  <div>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <header>
      <h1>Hello world!</h1>
    </header>
    <div>
      <Particles />
    </div>
    <Layout>
      {/* <tsParticles /> */}
      Hola
    </Layout>
  </div>
);

export default Home;
