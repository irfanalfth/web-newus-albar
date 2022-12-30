import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import PopularPosts from "@components/Blog/PopularPosts";
import AllNews from "@components/Blog/AllNews";
import Footer from "@components/App/Footer";

const PageBlogApp = () => {
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
        <main className="blog-page style-5 color-4">
          <PopularPosts />
          <AllNews />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
};

export default PageBlogApp;
