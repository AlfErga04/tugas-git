<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        Book::insert([
            [
                'judul' => 'Pulang',
                'deskripsi' => 'Novel tentang politik dan pengasingan.',
                'penulis' => 'Leila S. Chudori',
                'harga' => 90000,
                'stok' => 10,
                'genre_id' => 2, // Romance
                'author_id' => 1, // Leila S. Chudori
            ],
            [
                'judul' => 'The Subtle Art of Not Giving a F*ck',
                'deskripsi' => 'Self-help untuk hidup lebih santai.',
                'penulis' => 'Mark Manson',
                'harga' => 120000,
                'stok' => 8,
                'genre_id' => 1, // Action
                'author_id' => 2,
            ],
            [
                'judul' => 'Naruto Vol.1',
                'deskripsi' => 'Awal kisah ninja Naruto Uzumaki.',
                'penulis' => 'Masashi Kishimoto',
                'harga' => 45000,
                'stok' => 15,
                'genre_id' => 1, // Action
                'author_id' => 3,
            ],
            [
                'judul' => 'The Chronicles of Narnia',
                'deskripsi' => 'Petualangan di dunia magis Narnia.',
                'penulis' => 'C. S. Lewis',
                'harga' => 100000,
                'stok' => 5,
                'genre_id' => 3, // Sci-fi
                'author_id' => 4,
            ],
            [
                'judul' => 'Supernova: Ksatria, Puteri, dan Bintang Jatuh',
                'deskripsi' => 'Novel filsafat kontemporer.',
                'penulis' => 'Dee Lestari',
                'harga' => 95000,
                'stok' => 7,
                'genre_id' => 2, // Romance
                'author_id' => 5,
            ]
        ]);
    }
}
