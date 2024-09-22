import { Suspense } from 'react'
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact - RegexPlanet",
};

export default function Page() {


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ClientPage />
            </Suspense>
        </>
    );
}