<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    private $authors = [
        [
            'name' => 'PulangLeila Salikha Chudori',
            'bio' => 'Namanya dikenal melalui karya-karyanya berupa cerita pendek, novel, dan skenario drama televisi',
            'age' => 62,
        ],
        [
            'name' => 'Mark Manson',
            'bio' => 'seorang penulis dan narablog swadaya Amerika Serikat.',
            'age' => 41,
        ],
        [
            'name' => 'Masashi Kishimoto',
            'bio' => 'Adalah salah satu mangaka terbaik Jepang.',
            'age' => 50,
        ],
        [
            'name' => 'J.K. Rowling',
            'bio' => 'Adalah seorang penulis, filantropis, produser film, dan penulis skenario Inggris',
            'age' => 59,
        ],
        [
            'name' => 'William Shakespeare',
            'bio' => 'Seorang pujangga, dramawan, dan pemain sandiwara berkebangsaan Inggris.',
            'age' => 0,
        ]
    ];

    public function getAuthors() {
        return $this->authors;
    }
}
