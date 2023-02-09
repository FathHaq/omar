<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class WarehouseController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $warehouse = Warehouse::latest()->get();
    $title = 'Warehouse';
    return inertia('Warehouse/Index', compact('title', 'warehouse'));
  }

  public function create()
  {
    return inertia('Warehouse/Create');
  }

public function store(Request $request)
{
  //validate form
  $this->validate($request, [
    'name'      => 'required|string|min:3|max:25',
    'address'   => 'required|string|min:5|max:255',
    'image'     => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    'crew'      => 'required|integer|max:25',
  ]);

  if (!$request->image) {
    //create data
    Warehouse::create([
      'name'     => $request->name,
      'address'  => $request->address,
      'image'    => 'no_img.png',
      'crew'     => $request->crew,
      'pic'      => auth()->user()->id,
    ]);
  } else {
    //upload image
    $image = $request->file('image');
    $image->storeAs('public/warehouse', $image->hashName());

    //create data
    Warehouse::create([
      'name'     => $request->name,
      'address'  => $request->address,
      'image'    => $image->hashName(),
      'crew'     => $request->crew,
      'pic'      => auth()->user()->id,
    ]);
  }


    //redirect to index
    return redirect()->route('warehouse.index')->with(['success' => 'Data Berhasil Disimpan!']);
  }

  public function edit(Warehouse $warehouse)
  {
    return inertia('Warehouse/Edit', [
      'warehouse' => $warehouse
    ]);
  }

public function update(Request $request, Warehouse $warehouse)
{
  //validate form
  $this->validate($request, [
    'name'      => 'required|string|min:5|max:25',
    'address'   => 'required|string|min:10|max:255',
    'image'     => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    'crew'      => 'required|max:25',
  ]);


  if ($request->hasFile('image')) {

    //upload new image
    $image = $request->file('image');
    $image->storeAs('public/warehouse', $image->hashName());

    //delete old image
    Storage::delete('public/warehouse/' . $warehouse->image);

    //update post with new image
    $warehouse->update([
      'name'     => $request->name,
      'address'  => $request->address,
      'image'    => $image->hashName(),
      'crew'     => $request->crew,
    ]);
  } else {

    //update post without image
    $warehouse->update([
      'name'     => $request->name,
      'address'  => $request->address,
      'crew'     => $request->crew,
    ]);
  }
  //redirect to index
  return redirect()->route('warehouse.index')->with(['success' => 'Data Berhasil Diubah!']);
}


  public function destroy(Warehouse $warehouse)
  {
    //delete image
    Storage::delete('public/warehouse/' . $warehouse->image);

    //delete warehouse
    $warehouse->delete();

    //redirect to index
    return redirect()->route('warehouse.index')->with(['success' => 'Data Berhasil Dihapus!']);
  }
}
