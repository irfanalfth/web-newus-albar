import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import Header from '@components/Style2/Header';
import Website from '@components/Style2/ServicesDetails/Website';
import Footer from '@components/App/Footer';

const PageServiceDetails = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Newus Tech - Website Development</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <Header page="Service Details" title="Website Development" />
        <main className="services-details-page style-5">
          <Website />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageServiceDetails;