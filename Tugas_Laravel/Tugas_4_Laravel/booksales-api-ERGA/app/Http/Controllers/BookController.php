<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function index() {
        $books = Book::all();

        if ($books->isEmpty()) {
            return response() -> json([
                'success' => true,
                'message' => 'Kosong wak'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'message' => "Get all resource",
            'data' => $books
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'judul' => 'required|text|max: 100',
            'deskripsi' => 'required|string',
            'penulis' => 'required|text',
            'harga' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        Book::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'penulis' => $request->penulis,
            'harga' => $request->harga
        ]);

        return response()->json([
            'sucdess' => true,
            'message' => 'Resource stored successfully',
            'data' => $books
        ], 201);

    }

}
