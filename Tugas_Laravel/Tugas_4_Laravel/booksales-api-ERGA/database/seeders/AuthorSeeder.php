<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'nama' => 'Leila S. Chudori',
            'deskripsi' => 'Penulis dan jurnalis Indonesia. Dikenal lewat novel "Pulang".',
            'umur' => 62
        ]);

        Author::create([
            'nama' => 'Mark Manson',
            'deskripsi' => 'Penulis asal Amerika Serikat yang dikenal dengan buku "The Subtle Art of Not Giving a F*ck".',
            'umur' => 40
        ]);

        Author::create([
            'nama' => 'Masashi Kishimoto',
            'deskripsi' => 'Mangaka asal Jepang, pencipta serial manga terkenal "Naruto".',
            'umur' => 50
        ]);

        Author::create([
            'nama' => 'C. S. Lewis',
            'deskripsi' => 'Penulis dan akademisi asal Inggris. Terkenal dengan seri "The Chronicles of Narnia".',
            'umur' => 0
        ]);

        Author::create([
            'nama' => 'Dee Lestari',
            'deskripsi' => 'Penulis, musisi, dan penyanyi asal Indonesia. Dikenal lewat seri "Supernova".',
            'umur' => 49
        ]);
    }
}
