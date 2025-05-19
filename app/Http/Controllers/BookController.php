<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Book;

use Illuminate\Support\Collection;

class BookController extends Controller
{
    public function index()
    {
        // Data dummy tanpa database
        $books = collect([
            [
                'title' => '1984',
                'publication_year' => 1949,
                'author' => ['name' => 'George Orwell'],
            ],
            [
                'title' => 'Harry Potter and the Sorcerer\'s Stone',
                'publication_year' => 1997,
                'author' => ['name' => 'J.K. Rowling'],
            ],
            [
                'title' => 'The Hobbit',
                'publication_year' => 1937,
                'author' => ['name' => 'J.R.R. Tolkien'],
            ],
            [
                'title' => 'Murder on the Orient Express',
                'publication_year' => 1934,
                'author' => ['name' => 'Agatha Christie'],
            ],
            [
                'title' => 'The Old Man and the Sea',
                'publication_year' => 1952,
                'author' => ['name' => 'Ernest Hemingway'],
            ],
        ]);

        return view('books.index', compact('books'));
    }
}


