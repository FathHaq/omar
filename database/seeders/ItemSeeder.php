<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = ['Pupuk','Pestisida','Bibit kacang Ijo', 'Bibit Padi'];

        foreach ($items as $item) {
            DB::table('items')->insert(
                [
                    'item' => $item,
                ]
            );
        }
        
    }
}
