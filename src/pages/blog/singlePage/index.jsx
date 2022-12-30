import { useEffect, useRef } from "react";
import Head from "next/head";
import navbarScrollEffect from "@common/navbarScrollEffect";
import MainLayout from "@layouts/Main";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import Footer from "@components/App/Footer";
import AllNews from "@components/SinglePost/AllNews";
import PopularPosts from "@components/SinglePost/PopularPosts";

const PageSinglePost5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Newus Tech - Blog</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-5">
          <AllNews style="4" />
          <PopularPosts />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
};

export default PageSinglePost5;
