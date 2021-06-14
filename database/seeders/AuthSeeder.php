<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AuthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'mardha@gmail.com',
            'name' => 'mardha mardiya',
            'password' => Hash::make('12345'),
            'status' => 'aktif'
        ]);
    }
}
