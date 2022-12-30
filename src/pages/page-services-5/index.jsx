import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
// import Navbar from '@components/Navbars/SaasNav';
import Features from '@components/Saas/Features';
// import Services from '@components/Saas/Services';
// import About from '@components/Saas/About';
// import Testimonials from '@components/Saas/Testimonials';
import Pricing from '@components/Saas/Pricing';
import Footer from '@components/Saas/Footer';
// import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
// // import Header from "@components/App/Header";
// // import Clients from "@components/App/Clients";
// import Features from "@components/App/Features";
// import About from "@components/App/About";
// // import Screenshots from "@components/App/Screenshots";
// import Testimonials from "@components/App/Testimonials";
// import Pricing from "@components/App/Pricing";
// // import FAQ from "@components/App/FAQ";
// // import Community from "@components/App/Community";
// import Footer from "@components/App/Footer";

const PageServices5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Services 5</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main>
          <Features isServices />
          {/* <Services /> */}
          {/* <About noPaddingTop />
          <Testimonials /> */}
          <Pricing />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default PageServices5;