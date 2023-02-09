import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link, router } from '@inertiajs/react';
// import route from 'vendor/tightenco/ziggy/src/js';

export default function Dashboard(props) {
  const { warehouse } = usePage().props;

  const [uploadingImg, setUploadingImg] = React.useState(false)

  const { data, setData, put, errors } = useForm({
    _method: "put",
    name: warehouse?.name,
    address: warehouse?.address,
    crew: warehouse?.crew
  });
  console.log(data);

  function handleSubmit(e) {
    e.preventDefault();
    if (uploadingImg === true) {
      return router.post(route('warehouse.update', warehouse.id), data)
    }
    return router.put(route('warehouse.update', warehouse.id), data)
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit warehouse</h2>}
    >
      <Head title="Warehouses" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                  href={route("warehouse.index")}
                >
                  Back
                </Link>
              </div>

              <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <label className="">Name Warehouse</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2"
                      label="Name"
                      name="name"
                      defaultValue={warehouse.name}
                      onChange={(e) =>
                        setData("name", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.title}
                    </span>
                  </div>
                  <div className="mb-0">
                    <label className="">Address</label>
                    <textarea
                      type="text"
                      className="w-full rounded"
                      label="Address"
                      name="address"
                      // errors={errors.address}
                      defaultValue={warehouse.address}
                      onChange={(e) =>
                        setData("address", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.body}
                    </span>
                  </div>
                  <div className="mb-0 flex flex-col">
                    <label className="">Input Gambar</label>
                    <input type="file" className="file-input file-input-ghost file-input-md w-full max-w-xs"
                      label="Image"
                      name="image"
                      errors={errors.image}
                      onChange={(e) => {
                        setData("image", e.target.files[0])
                        setUploadingImg(true);
                      }}
                    />
                  </div>
                  <div className="mb-0">
                    <label className="">Crew</label>
                    <input
                      type="text"
                      className="w-full rounded"
                      label="Crew"
                      name="crew"
                      // errors={errors.crew}
                      defaultValue={warehouse.crew}
                      onChange={(e) =>
                        setData("crew", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                      {errors.body}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                  >
                    Update
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}