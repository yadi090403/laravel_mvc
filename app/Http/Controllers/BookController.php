<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // GET /books
    public function index()
    {
        $books = Book::with(['genre', 'author'])->get();
        return response()->json($books);
    }

    // POST /books
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'cover_photo' => 'nullable|string|max:255',
            'genre_id' => 'required|exists:genres,id',
            'author_id' => 'required|exists:authors,id',
        ]);

        $book = Book::create($request->all());
        return response()->json($book, 201);
    }

    // GET /books/{id}
    public function show($id)
    {
        $book = Book::with(['genre', 'author'])->findOrFail($id);
        return response()->json($book);
    }

    // PUT /books/{id}
    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|numeric',
            'stock' => 'sometimes|integer',
            'cover_photo' => 'nullable|string|max:255',
            'genre_id' => 'sometimes|exists:genres,id',
            'author_id' => 'sometimes|exists:authors,id',
        ]);

        $book->update($request->all());
        return response()->json($book);
    }

    // DELETE /books/{id}
    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}


// namespace App\Http\Controllers;

// use App\Models\Book;
// use Illuminate\Http\Request;

// class BookController extends Controller
// {
//     public function index() {
//         $books = Book::all();

//         return response()->json([
//             "success" => true,
//             "message" => "Get All Resource",
//             "data" => $books
//         ], 200);
//     }
// }
