<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index() {
        $authors = Author::all();
        return response()->json([
            "success" => true,
            "message" => "All Authors",
            "data" => $authors
        ], 200);
    }

    public function store(Request $request) {
        $author = Author::create([
            'name' => $request->name,
            'bio' => $request->bio,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Author Created",
            "data" => $author
        ], 201);
    }
}


// namespace App\Http\Controllers;

// use App\Models\Author;

// class AuthorController extends Controller
// {
//     public function index()
//     {
//         $authors = Author::all();
//         return view('authors.index', compact('authors'));
//     }
// }

