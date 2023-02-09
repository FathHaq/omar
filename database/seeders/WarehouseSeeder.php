<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WarehouseSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
public function run()
{
  DB::table('warehouses')->insert(
    [
      'name' => 'Gudang Dayeuh',
      'address' => 'Kp. Dayeuh, Kec. Jonggol, Kab. Bogor',
      'image' => 'gudang_dayeuh.jpg',
      'crew' => fake()->numberBetween(5, 20),
    ]);
}
}
