import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import InputError from '../InputError';

export default function FormEdit({title, warehouse}) {
    //define state
    // const [name, setName] = useState(data.name);
    // const [address, setAddress] = useState(data.address);
    // const [image, setImage] = useState(data.image);
    // const [crew, setCrew] = useState(data.crew);

    const { data, setData, patch, errors, processing,  } = useForm({
        name: data.name,
        address: data.address,
    });

    const submit = (e) => {
        e.preventDefault(); 

        patch(route('warehouse.update'));
    };
  return (
    <form onSubmit={submit}>
        <h1 className="text-5xl font-bold">Edit your Data Warehouse</h1>
        
        <input type="text" id="name" name="name" value={warehouse.name} placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setData('name', e.target.value)}/>

        <input type="text" id="address" name="address" value={warehouse.address}  placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setData('address',e.target.value)}/>

        <input type="file" id="image" name="image" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

        <input type="text" id="crew" name="crew" value={warehouse.crew}  placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setData('crew',e.target.value)}/>
        
        <button type='submit' className="btn btn-outline btn-success" disabled={processing}>Success</button>
    </form>
  )
}
