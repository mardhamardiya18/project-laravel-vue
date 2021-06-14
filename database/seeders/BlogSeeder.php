<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Blog::create([
            'title' => 'ini Blog Pertamaku',
            'content' => 'ini blog content pertamaku',
            'photo' => 'https://picsum.photos/200/300'
        ]);
    }
}
