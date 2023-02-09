import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, router } from '@inertiajs/react';

export default function Index(props) {
  const { item } = usePage().props

  console.log(props.auth.user.roles[0].name);

  function destroy(e) {
    if (confirm("Are you sure you want to delete this user?")) {
      router.delete(route("item.destroy", e.currentTarget.id));
    }
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title="item" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                  href={route("item.create")}
                >
                  Tambah List Barang
                </Link>
              </div>

              <table className="table-fixed w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 w-20">No.</th>
                    <th className="px-4 py-2">Nama Barang</th>
                    {
                        props.auth.user.roles[0].name == 'admin' ?
                        <th className="px-4 py-2 ">Action</th>
                        :
                        ""
                    }
                  </tr>
                </thead>
                <tbody>
                  {item.map((item, index) => (
                    <tr>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{item.item}</td>
                      {
                          props.auth.user.roles[0].name == 'admin' ?
                          <td className="border px-4 py-2">
                            <Link
                              tabIndex="1"
                              className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                              href={route("item.edit", item.id)}
                            >
                              Edit
                            </Link>
                            <button
                              onClick={destroy}
                              id={item.id}
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

                  {item.length === 0 && (
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