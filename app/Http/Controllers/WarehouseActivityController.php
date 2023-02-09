<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Warehouse;
use App\Models\WarehouseActivity;
use Illuminate\Http\Request;

class WarehouseActivityController extends Controller
{
    public function index()
    {
        $activity = WarehouseActivity::with('item')->get();
        return inertia('WarehouseActivity/Index', compact( 'activity'));
    }

    public function store(Request $request)
    {
        // dd($request->all());
        //validate form
        $this->validate($request, [
            'warehouse_id'=> 'required|numeric|min:1|max:25',
            'item_id'     => 'required|numeric|min:1|max:25',
            'masuk'       => 'nullable|numeric|min:1',
            'keluar'      => 'nullable|numeric|min:1',
            'unit'        => 'required|string|min:1|max:25',
            'keterangan'  => 'required|string|min:5|max:25',
        ]);
        // dd($request->all(),'sip');
        //create data

        if ($request->masuk != null) {
            WarehouseActivity::create([
                'warehouse_id'      => $request->warehouse_id,
                'item_id'           => $request->item_id,
                'masuk'             => $request->masuk,
                'keluar'            => 0,
                'unit'              => $request->unit,
                'keterangan'        => $request->keterangan,
            ]);
        } else {
            WarehouseActivity::create([
                'warehouse_id'      => $request->warehouse_id,
                'item_id'           => $request->item_id,
                'masuk'             => 0,
                'keluar'            => $request->keluar,
                'unit'              => $request->unit,
                'keterangan'        => $request->keterangan,
            ]);
        }
        

        //redirect to index
        return redirect()->route('activity.index')->with(['success' => 'Data Berhasil Disimpan!']);
    }

    public function show(WarehouseActivity $warehouseActivity)
    {
        //
    }

    public function edit(WarehouseActivity $warehouseActivity)
    {
        //
    }

    public function update(Request $request, WarehouseActivity $warehouseActivity)
    {
        //validate form
        $this->validate($request, [
            'warehouse_id'=> 'required|integer|min:1|max:25',
            'item_id'     => 'required|integer|min:1|max:25',
            'masuk'       => 'integer|min:1',
            'keluar'      => 'integer|min:1',
            'unit'        => 'required|string|min:1|max:25',
            'keterangan'  => 'required|string|min:5|max:25',
        ]);

        //create data
        $warehouseActivity->update([
            'warehouse_id'      => $request->warehouse_id,
            'item_id'           => $request->item_id,
            'masuk'             => $request->masuk,
            'keluar'            => $request->keluar,
            'unit'              => $request->unit,
            'keterangan'        => $request->keterangan,
        ]);

        //redirect to index
        return redirect()->route('activity.index')->with(['success' => 'Data Berhasil Diubah!']);
    }

    public function destroy($id)
    {
        //delete activity
        WarehouseActivity::find($id)->delete();

        //redirect to index
        return redirect()->route('activity.index')->with(['success' => 'Data Berhasil Dihapus!']);
    }

    public function masuk()
    {
        $warehouse = Warehouse::all();
        $item = Item::all();
        return inertia('WarehouseActivity/Masuk', compact('warehouse', 'item'));
    }

    public function keluar()
    {
        $warehouse = Warehouse::all();
        $item = Item::all();
        return inertia('WarehouseActivity/Keluar', compact('warehouse', 'item'));
    }

}
