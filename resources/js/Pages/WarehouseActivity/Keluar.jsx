import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link,router } from '@inertiajs/react';

export default function Keluar(props) {
  const { data, setData, errors, post } = useForm({
    warehouse_id: "",
    item_id: "",
    masuk: "",
    keluar: "",
    unit: "",
    keterangan: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // router.post(route("activity.store"),data)
    post(route("activity.store"));
  }

  const volumeRange = Array.from({length: 100}, (_, i) => i + 1);

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Activity Gudang</h2>}
    >
      <Head title="Tambah Activity Gudang" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                  href={route("activity.index")}
                >
                  Back
                </Link>
              </div>

              <form name="createForm" onSubmit={ (e) => handleSubmit(e) }>
                <div className="flex flex-wrap">
                  <div className="mb-8 w-1/2">
                    <label className="">Warehouse</label>
                    <div>
                      <select   className="select select-ghost select-md w-full max-w-xs"
                        name="warehouse_id"
                        value={data.warehouse_id}
                        onChange={(e) =>
                          setData("warehouse_id", e.target.value)
                        }
                      >
                        <option selected>Pilih Nama Gudang</option>
                        {
                          props.warehouse.map((data, index) => (
                            <option key={index} value={data.id}>{data.name}</option>
                          ))
                        }
                      </select>
                    </div>
                    <span className="text-red-600">
                      {errors.warehouse_id}
                    </span>
                  </div>
                  <div className="mb-0 w-1/2">
                    <label className="">Nama Barang</label>
                    <div>
                      <select className="select select-ghost select-md w-full max-w-xs"
                        name="item_id"
                        defaultValue={data.item_id}
                        onChange={(e) =>
                          setData("item_id", e.target.value)
                        }
                      >
                        <option selected>Pilih Nama Gudang</option>
                        {
                          props.item.map((data, index) => (
                            <option key={index} value={data.id}>{data.item}</option>
                          ))
                        }
                      </select>
                    </div>
                    <span className="text-red-600">
                      {errors.item_id}
                    </span>
                  </div>
                  <div className="mb-0 w-1/2">
                    <label className="">Volume</label>
                    <div>
                      <select   className="select select-ghost select-md w-full max-w-xs"
                        name="keluar"
                        value={data.keluar}
                        onChange={(e) =>
                          setData("keluar", e.target.value)
                        }
                      >
                        <option selected>Pilih Volume</option>
                        {volumeRange.map((i)=>{
                          return <>
                          <option value={i}>{i}</option>
                          </>
                        })}         
                      </select>
                    </div>
                    <span className="text-red-600">
                      {errors.keluar}
                    </span>
                  </div>
                  <div className="mb-0 w-1/2">
                    <label className="">Satuan</label>
                    <div>
                      <select   className="select select-ghost select-md w-full max-w-xs"
                        name="unit"
                        value={data.unit}
                        onChange={(e) =>
                          setData("unit", e.target.value)
                        }
                      >
                        <option selected>Pilih Satuan Barang</option>
                        <option value='kg'>kg</option>
                        <option value='pound'>pound</option>
                        <option value='gram'>gram</option>
                        <option value='ons'>ons</option>
                        <option value='pck'>pck</option>
                        <option value='pcs'>pcs</option>
                      </select>
                    </div>
                    <span className="text-red-600">
                      {errors.unit}
                    </span>
                  </div>
                  <div className="mt-8 mb-10 w-full flex flex-col">
                    <label className="">Keterangan</label>
                    <textarea type="text" placeholder="Type here" className="textarea textarea-ghost w-full max-w-lg" name="keterangan" value={data.keterangan}
                      onChange={(e) =>
                        setData("keterangan", e.target.value)
                      }
                    />
                    <span className="text-red-600">
                        {errors.keterangan}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                  >
                    Save
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
