/* eslint-disable @typescript-eslint/camelcase */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { FunctionComponent } from 'react';
import { tsParticles } from 'tsparticles';

tsParticles.load('tsparticles', {
  particles: {
    number: {
      value: 144,
      density: {
        enable: true,
        value_area: 1499.3805191013182
      }
    },
    color: {
      value: '#faf7f7'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 1,
        color: '#fff5f5'
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.1202559045649141,
      random: true,
      anim: {
        enable: true,
        speed: 2.517439358134172,
        opacity_min: 0.17053621458328264,
        sync: true
      }
    },
    size: {
      value: 4.008530152163803,
      random: true,
      anim: {
        enable: true,
        speed: 9.59040959040959,
        size_min: 8.12077212301346,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 144.30708547789692,
      color: '#ffffff',
      opacity: 0.9941154777366232,
      width: 1.7637532669520732
    },
    move: {
      enable: true,
      speed: 3.2068241217310423,
      direction: 'top',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 1603.4120608655214,
        rotateY: 1362.900251735693
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 438.5216946427268,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
});

const Home: FunctionComponent = () => (
  // <div className="container">
  <div>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <header>
      <h1>Hello world!</h1>
    </header>
    <div style={{ backgroundColor: 'black' }}>
      <div
        id="tsparticles"
        style={{ padding: 5, height: '100%', width: '100%' }}
      ></div>
    </div>
    <Layout>Hola</Layout>
  </div>
);

export default Home;
