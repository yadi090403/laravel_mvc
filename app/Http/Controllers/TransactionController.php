<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    // GET /transactions
    public function index()
    {
        $transactions = Transaction::with(['customer', 'book'])->get();
        return response()->json($transactions);
    }

    // POST /transactions
    public function store(Request $request)
    {
        $request->validate([
            'order_number' => 'required|string|max:255',
            'customer_id' => 'required|exists:users,id',
            'book_id' => 'required|exists:books,id',
            'total_amount' => 'required|numeric'
        ]);

        $transaction = Transaction::create([
            'order_number' => $request->order_number,
            'customer_id' => $request->customer_id,
            'book_id' => $request->book_id,
            'total_amount' => $request->total_amount,
        ]);

        return response()->json($transaction, 201);
    }

    // GET /transactions/{id}
    public function show($id)
    {
        $transaction = Transaction::with(['customer', 'book'])->findOrFail($id);
        return response()->json($transaction);
    }

    // PUT /transactions/{id}
    public function update(Request $request, $id)
    {
        $transaction = Transaction::findOrFail($id);

        $request->validate([
            'order_number' => 'sometimes|string|max:255',
            'customer_id' => 'sometimes|exists:users,id',
            'book_id' => 'sometimes|exists:books,id',
            'total_amount' => 'sometimes|numeric'
        ]);

        $transaction->update($request->only(['order_number', 'customer_id', 'book_id', 'total_amount']));

        return response()->json($transaction);
    }

    // DELETE /transactions/{id}
    public function destroy($id)
    {
        $transaction = Transaction::findOrFail($id);
        $transaction->delete();

        return response()->json(['message' => 'Transaction deleted successfully']);
    }
}
