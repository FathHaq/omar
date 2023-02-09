import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, router, useForm } from "@inertiajs/react";

const urlPath = window.location.protocol+'//'+window.location.host

export default function Index(props) {
  const warehouse = props.warehouse[0];

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
      <Head title="warehouses" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

            


              <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <label className="">Name warehouse</label>
                    <input
                      type="text"
                      className="w-full px-4 py-xl border-opacity-5"
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
                    <label className="">Alamat warehouse</label>
                    <textarea
                      type="text"
                      className="w-full rounded-xl border-opacity-5"
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
                  <div className="my-5 flex items-start gap-10 ">
                    <div className="avatar">
                      <div className="w-24 rounded-xl">
                        <img src={`${urlPath}/storage/warehouse/${warehouse.image}`} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="">Gambar warehouse</label>
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
                  </div>
                  <div className="mb-0">
                    <label className="">Crew</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border-opacity-5"
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
