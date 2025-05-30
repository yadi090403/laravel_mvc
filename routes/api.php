<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\BookController;   // import
use App\Http\Controllers\GenreController;  // import
use App\Http\Controllers\AuthorController; // import
use app\Http\Controllers\TransactionController; // import

// Route untuk user yang di-protect oleh Sanctum
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route API untuk menampilkan Data
Route::get('/books', [BookController::class, 'index']);
// Route::get('/genres', [GenreController::class, 'index']);
Route::apiResource('genres', GenreController::class)->only(['show', 'update', 'destroy']);

Route::get('/authors', [AuthorController::class, 'index']);
Route::post('/authors', [AuthorController::class, 'store']);
Route::apiResource('transactions', TransactionController::class);

