<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $manager = User::create([
            'name' => 'Admin',
            'email' => 'admin@gudang.id',
            'email_verified_at' => now(),
            'password' => bcrypt('12345678'),
        ]);
        $manager->assignRole('admin');

        $crew = User::create([
            'name' => 'Crew',
            'email' => 'crew@gudang.id',
            'email_verified_at' => now(),
            'password' => bcrypt('12345678'),
        ]);
        $crew->assignRole('crew');

    }
}
