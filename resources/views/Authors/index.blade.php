<!DOCTYPE html>
<html>
<head>
    <title>Daftar Penulis</title>
</head>
<body>
    <h1>Daftar Penulis</h1>
    <ul>
        @foreach ($authors as $author)
            <li>{{ $author['id'] }} - {{ $author['name'] }}</li>
        @endforeach
    </ul>
</body>
</html>
