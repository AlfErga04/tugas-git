<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/books', [BookController::class, 'index']);

Route::get('/genres', [GenreController::class, 'index']);

Route::get('/authors', [AuthorController::class, 'index']);