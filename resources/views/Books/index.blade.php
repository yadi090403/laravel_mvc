<!DOCTYPE html>
<html>
<head>
    <title>Daftar Buku</title>
</head>
<body>
    <h1>Daftar Buku</h1>
    <ul>
        @foreach ($books as $book)
            <li>
                <strong>{{ $book['title'] }}</strong> ({{ $book['publication_year'] }})<br>
                Penulis: {{ $book['author']['name'] }}
            </li>
        @endforeach
    </ul>
</body>
</html>
