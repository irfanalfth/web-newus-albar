import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import About from "@components/SingleProject/Frc/About";
// import Challenge from "@components/SingleProject/Bgp/Challenge";
import Screenshots from "@components/App/Screenshots";
import Footer from "@components/App/Footer";

const PageSingleProjectApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Newus Tech - FRC</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="single-project pt-10 style-5">
          <About style="4" />
          {/* <Challenge style="4" /> */}
          <Screenshots />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
};

export default PageSingleProjectApp;
