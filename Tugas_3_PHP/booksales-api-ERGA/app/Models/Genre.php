<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    private $genres = [
        [
            'genre' => 'novel',
            'description' => 'Cerita panjang dengan tokoh dan alur yang kompleks.'
        ],
        [
            'genre' => 'Buku Pengembangan Diri',
            'description' => 'Buku yang bertujuan untuk membantu pembaca mencapai potensi diri',
        ],
        [
            'genre' => 'komik',
            'description' => 'Cerita yang disampaikan melalui gambar dan teks.',
        ],
        [
            'genre' => 'Sejarah',
            'description' => 'Cerita yang berlatar belakang di masa lalu, bisa berdasarkan fakta sejarah atau fiksi. '
        ],
        [
            'genre' => 'Aksi dan Petualangan',
            'description' => 'Cerita yang penuh dengan aksi, petualangan, dan tantangan.'
        ]
    ];

    public function getGenres() {
        return $this->genres;
    }
}
