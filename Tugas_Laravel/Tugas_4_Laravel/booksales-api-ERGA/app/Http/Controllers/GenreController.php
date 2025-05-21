<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    public function index() {
        $genres = Genre::all();

         if ($books->isEmpty()) {
            return response() -> json([
                'success' => true,
                'message' => 'Kosong euy'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'data' => $genres
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|text',
            'description' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        Genre::create([
            'name' => $name->name,
            'description' => $request->description
        ]);

        return response()->json([
            'sucdess' => true,
            'message' => 'Resource stored successfully',
            'data' => $genres
        ], 201);

    }


}
