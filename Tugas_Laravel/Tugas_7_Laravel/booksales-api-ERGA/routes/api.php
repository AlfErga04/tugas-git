<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/  
Route::apiResource('books', BookController::class)->only(['index', 'show']);

Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);

Route::apiResource('genre', GenreController::class)->only(['index', 'show']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::apiResource('books', BookController::class)->only(['store', 'update', 'destroy']);
Route::apiResource('genre', GenreController::class)->only(['store', 'update', 'destroy']);
Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);

Route::middleware(['auth:api'])->group(function() {

    Route::apiResource('transactions', TransactionController::class)->only(['store', 'show']);

    Route::middleware(['role:admin'])->group(function() {
        Route::apiResource('transactions', TransactionController::class)->only(['index', 'store', 'destroy']);

    });
});


