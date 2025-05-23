<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

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

    public function show(string $id) {
        $book = Book::find($id);

        if (!$book) {
            return response() -> json([
                'success' => 'false',
                'message' => 'Resource not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get detailed resource',
            'data' => $book
        ], 200);
    }

    public function destroy(string $id) {
        $book = Book::find($id);

        if (!$book) {
            return response() -> json([
                'success' => 'false',
                'message' => 'Resource not found'
            ], 404);
        }

        if ($book->cover_photo) {
            Storage::dosl('public')->delete('books/' . $book->cover_photo); 
        }

        $book->delete();
        return response()->json([
            'success' => true,
            'message' => 'Delete success'
        ]);
    }

    public function update(string $id, Request $request) {
        $book = Book::find($id);

        if (!$book){
            return response()->json([
                'success' => false,
                'message' => 'Data not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'judul' => 'required|text|max: 100',
            'deskripsi' => 'required|string',
            'penulis' => 'required|text',
            'harga' => 'required|numeric'
        ]);
        
        if ($validator->fails()) {
            return respone() -> json([
                'success' => false,
                'message' => $validator->errors()
            ], 433);
        }

        $data = [
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'penulis' => $request->penulis,
            'harga' => $request->harga
        ];

        if ($request->hashFile('cover_photo')) {
            $image = $request->file('cover_photo');
            $image->store('books', 'public');

            if ($books->cover_photo){
                Storage::disk('public')->delete('books/' . $bppl->cover_photo);
            }

            $data['cover_photo'] = $image->hashName();
        }

        $book->update($data);
        return response()->json([
            'success' => true,
            'message' => 'Data update success',
            'data' -> $book
        ], 200);

    }

}
