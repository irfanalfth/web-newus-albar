//= React
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

//= Components
import ScrollToTop from "@components/ScrollToTop";
//= Scripts
import fixStylesheetsOrder from "@common/fixStylesheetsOrder";

const MainLayout = ({ children, scrollTopText, isRTL }) => {
  useEffect(() => {
    fixStylesheetsOrder(isRTL);
  }, [isRTL]);

  const route = useRouter();

  console.log(route.pathname);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/css/lib/all.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/animate.css" />
        {isRTL ? (
          <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
        ) : (
          <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        )}
        <link rel="stylesheet" href="/assets/css/style.css" />
        {isRTL ? (
          <link rel="stylesheet" href="/assets/css/rtl_style.css" />
        ) : null}
      </Head>

      {children}
      <ScrollToTop topText={scrollTopText} />
    </>
  );
};

export default MainLayout;
