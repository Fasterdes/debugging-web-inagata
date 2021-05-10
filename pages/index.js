import tw from 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import CaseStudy from '@/components/Home/CaseStudy';
import StimulusAds from '@/components/Home/StimulusAds';
import CallToAction from '@/components/Home/CallToAction';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <CaseStudy />
          <section tw="h-screen 2xl:(flex flex-col)">
            <StimulusAds />
            <CallToAction />
            <Footer />
          </section>
        </main>
      </Layout>
    </>
  );
}
