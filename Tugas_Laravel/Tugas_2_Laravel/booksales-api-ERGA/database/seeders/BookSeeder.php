<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'judul' => 'Pulang',
            'deskripsi' => 'Petualangan seorang pemuda yang kembali ke desa kelahirannya.',
            'penulis' => 'Leila S. Chudori',
            'harga' => 35000
        ]);

        Book::create([
            'judul' => 'Sebuah Seni untuk Bersikap Bodo Amat',
            'deskripsi' => 'Buku yang membahas tentang kehidupan dan filosofi hidup seseorang.',
            'penulis' => 'Mark Manson',
            'harga' => 25000
        ]);

        Book::create([
            'judul' => 'Naruto',
            'deskripsi' => 'Buku yang membahas tentang jalan ninja seseorang.',
            'penulis' => 'Masashi Kishimoto',
            'harga' => 25000
        ]);

        Book::create([
            'judul' => 'Narnia (The Chronicles of Narnia)',
            'deskripsi' => 'sebuah seri novel fantasi yang terdiri dari tujuh buku dan ditujukan untuk anak-anak.',
            'penulis' => 'C. S. Lewis',
            'harga' => 45000
        ]);

        Book::create([
            'judul' => 'Supernova: Akar',
            'deskripsi' => 'novel fiksi ilmiah karangan Dee yang diterbitkan pada tahun 2002',
            'penulis' => 'Dee Lestari',
            'harga' => 50000
        ]);
    }
}
