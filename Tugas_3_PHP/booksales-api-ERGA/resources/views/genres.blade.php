<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Genres </title>
</head>
<body>
    <h1>ini adalah halaman genre buku</h1>
    @foreach ($genres as $item)
    <ul>
        <li>{{ $item['genre'] }}</li>
        <li>{{ $item['description'] }}</li>
    </ul>

    @endforeach
</body>
</html>