<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        $item = Item::latest()->get();
        return inertia('Item/Index', compact('item'));
    }

    public function create()
    {
        return inertia('Item/Create');
    }
    
    public function store(Request $request)
    {
        //validate form
        $this->validate($request, [
            'item'      => 'required|string|min:2|max:25',
        ]);

        //create data
        Item::create([
            'item'     => $request->item,
        ]);

        //redirect to index
        return redirect()->route('item.index')->with(['success' => 'Data Berhasil Disimpan!']);
    }

    public function show( Item $item)
    {
        return inertia('Item/Show', [
            'item' => $item
        ]);
    }
    
    public function update(Request $request, Item $item)
    {
        //validate form
        $this->validate($request, [
            'name'      => 'required|string|min:5|max:25',
        ]);

        //create data
        $item->update([
            'name'     => $request->name,
        ]);

        //redirect to index
        return redirect()->route('item.index')->with(['success' => 'Data Berhasil Di Update!']);
    }

    public function destroy($id)
    {
        //delete activity
        Item::find($id)->delete();

        //redirect to index
        return redirect()->route('item.index')->with(['success' => 'Data Berhasil Dihapus!']);
    }
}
