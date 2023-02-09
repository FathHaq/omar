<?php

namespace Database\Seeders;

use App\Models\WarehouseStorage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WarehouseActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $unit = ['kg','pound','gram','ons','pck','pcs'];
        $end = fake()->numberBetween(25,40);

        for ($j=1; $j <= $end; $j++) {

            $rndmUnit = fake()->numberBetween(0,5);
            $value = fake()->numberBetween(10,20);

            $valid = fake()->numberBetween(0,1);
            
            if ($valid == 0) {
                $key = 'masuk';
            } else {
                $key = 'keluar';
            }

            DB::table('warehouse_activities')->insert([
                [
                    'item_id' => fake()->numberBetween(1,4),
                    $key => $value,
                    'unit' => $unit[$rndmUnit],
                    'keterangan' => fake()->sentence(2)
                ],
            ]);

        }
    }
}
