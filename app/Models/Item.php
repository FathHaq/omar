<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $guarded = ['id']; 

    public function storage()
    {
        return $this->hasMany(WarehouseStorage::class);
    }

    public function activities()
    {
        return $this->hasMany(WarehouseActivity::class);
    }
}
