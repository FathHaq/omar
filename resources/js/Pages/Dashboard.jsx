import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const urlPath = window.location.protocol+'//'+window.location.host

export default function Dashboard(props) {
    console.log(props.warehouses[0]);
    const warehouse = props.warehouses[0]
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />
        {/* <ChartActivity/> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-10">
                    <div className="alert shadow-lg">
                        <h3 className="font-bold text-4xl">Hallo {props.auth.user.name}!</h3>
                        <div className="text-md">Have a nice Day</div>
                    </div>
{
    
}
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className='w-96'><img src={urlPath+"/storage/warehouse/"+warehouse.image} alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{warehouse.name}</h2>
                            <p>{warehouse.address}</p>
                            <div className="card-actions justify-end">
                                <Link href='/pembukuan' className="btn btn-primary">Liat Pembukuan hari ini</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
