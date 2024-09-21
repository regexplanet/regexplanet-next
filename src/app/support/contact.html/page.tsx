import { Suspense } from 'react'
import ClientPage from './ClientPage';

export default function Page() {


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ClientPage />
            </Suspense>
        </>
    );
}