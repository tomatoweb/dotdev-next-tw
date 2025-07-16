'use client';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

/* The NextPage type is a type alias for a React component that is a Next.js page.
It includes properties specific to Next.js pages, such as getStaticProps, getServerSideProps,
and others used for data fetching during page rendering.
So, here we create a Next.js page component using TypeScript.
It is defining a constant named Page with the type NextPage.
This is a common pattern when working with Next.js and TypeScript
to ensure type safety and provide better development tooling support. */

const Home: NextPage = () => {
    const NotSSRMap = dynamic(() => import('@/components/maps'), {
        ssr: false,
        loading: () => (
            <div style={{textAlign: 'center', paddingTop: 20}}>
              Loading…
            </div>
        )
    });

    return (
        <div className="w-full h-[100vh]">
            <NotSSRMap />
        </div>
    );
};

export default Home;