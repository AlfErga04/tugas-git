<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ini adalah halaman author</h1>
    @foreach ($authors as $item)
    <ul>
        <li>{{ $item['nama'] }}</li>
        <li>{{ $item['deskripsi'] }}</li>
        <li>{{ $item['umur'] }}</li>
    </ul>

    @endforeach
</body>
</html>