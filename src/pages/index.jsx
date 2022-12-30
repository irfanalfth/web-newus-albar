import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
import PreLoader from "@components/PreLoader";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import Header from "@components/App/Header";
import Clients from "@components/App/Clients";
// import About from "@components/App/About";
import Screenshots from "@components/App/Screenshots";
import Testimonials from "@components/App/Testimonials";
// import Pricing from "@components/App/Pricing";
// import FAQ from "@components/App/FAQ";
// import Community from "@components/App/Community";
import Team from "@components/App/Team";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import Footer from "@components/App/Footer";
import Services from "@components/IT/Services";

const HomeAppLanding = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>NewusTech - New Experience with Us</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <Header />
        <main>
          <Services />
          {/* <About /> */}
          <Screenshots />
          <Testimonials />
          {/* <Pricing /> */}
          {/* <FAQ /> */}
          <Team />
        </main>
        <Footer />
        <PreLoader />
      </MainLayout>
    </>
  );
};

export default HomeAppLanding;
