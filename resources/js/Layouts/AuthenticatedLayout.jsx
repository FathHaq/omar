import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';

export default function Authenticated({ auth, children }) {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
                <Header user={auth.user}/>
                {children}
            </main>
        </>
    );
}
