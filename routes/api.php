<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\BookController;   // import
use App\Http\Controllers\GenreController;  // import

// Route untuk user yang di-protect oleh Sanctum
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route API untuk menampilkan data buku dan genre
Route::get('/books', [BookController::class, 'index']);
Route::get('/genres', [GenreController::class, 'index']);
