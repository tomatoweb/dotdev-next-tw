'use client';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
    const NotSSRMaps = dynamic(() => import('@/components/maps'), {
        ssr: false,
    });

    return (
        <div className="mt-1 mx-auto flex w-full justify-center gap-8 text-center">
            <NotSSRMaps />
        </div>
    );
};

export default Home;