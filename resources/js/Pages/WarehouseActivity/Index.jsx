import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, router } from '@inertiajs/react';

export default function Index(props) {
    const { activity } = usePage().props
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("activity.destroy", e.currentTarget.id));
        }
    }
    console.log(props.auth.user.roles[0].name)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Activity</h2>}
        >
            <Head title="Activity"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("activity.masuk") }
                                >
                                    Barang Masuk
                                </Link>
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("activity.keluar") }
                                >
                                    Barang Keluar
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Item</th>
                                        <th className="px-4 py-2 w-36">Masuk</th>
                                        <th className="px-4 py-2 w-36">Keluar</th>
                                        <th className="px-4 py-2">Keterangan</th>
                                        {
                                            props.auth.user.roles[0].name == 'admin' ?
                                            <th className="px-4 py-2 w-28">Action</th>
                                            :
                                            ""
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {activity.map((data,index) => (
                                        <tr>
                                            <td className="border px-4 py-2">{ index+1 }</td>
                                            <td className="border px-4 py-2">{ data.item.item }</td>
                                            <td className="border px-4 py-2 text-center justify-center w-36">
                                                { 
                                                    data.masuk != 0 ? 
                                                        <>
                                                            <span className='w-8 text-right mr-2'>{ data.masuk }</span> <span className='w-14'>{data.unit}</span>
                                                        </>
                                                    :
                                                    <>-</>
                                                }
                                            </td>
                                            <td className="border px-4 py-2 text-center justify-center w-36">
                                                { 
                                                    data.keluar != 0 ? 
                                                        <>
                                                            <span className='w-8 text-right mr-2'>{ data.keluar }</span> <span className='w-14'>{data.unit}</span>
                                                        </>
                                                    :
                                                    <>-</>
                                                }
                                            </td>
                                            <td className="border px-4 py-2 text-center justify-center">{data.keterangan}</td>
                                            {
                                                
                                                props.auth.user.roles[0].name == "admin" ? 
                                                <td className="border px-4 py-2 flex justify-center w-28">
                                                    <button
                                                        onClick={destroy}
                                                        id={data.id}
                                                        tabIndex="-1"
                                                        type="button"
                                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                                :
                                                ""
                                            }
                                        </tr>
                                    ))}
  
                                    {activity.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}