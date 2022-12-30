import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import About from '@components/App/About2';
import Team from '@components/App/Team';
import Prinsip from '@components/App/Prinsip';
import Footer from '@components/App/Footer';

const PageAboutApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Newus - About Company</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="about-page style-6">
          <About />
          <Prinsip/>
          <Team />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default PageAboutApp;