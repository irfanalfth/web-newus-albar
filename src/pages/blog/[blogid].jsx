import { useEffect, useRef } from "react";
import Head from "next/head";
import navbarScrollEffect from "@common/navbarScrollEffect";
import MainLayout from "@layouts/Main";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import Footer from "@components/App/Footer";
import Blog from "@components/SinglePost/[Blog]";

import {useRouter} from "next/router";

import details from '@data/SinglePost/details.json';

const BlogId = () => {
    const navbarRef = useRef(null);
    const router = useRouter();
    const {blogid} = router.query;
    
    const data = details[blogid];
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
                    <Blog style="4" data={data}/>
                </main>
                <Footer noWave />
            </MainLayout>
        </>
    );
};

export default BlogId;
