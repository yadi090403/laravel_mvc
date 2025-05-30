<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'stock',
        'cover_photo',
        'genre_id',
        'author_id',
    ];

    // Relasi ke genre
    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    // Relasi ke author
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    // Relasi ke transactions
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Book extends Model
// {
//     protected $fillable = ['title', 'author_id', 'publication_year'];

//     public function author()
//     {
//         return $this->belongsTo(Author::class);
//     }
// }
// use App\Models\Author;
// use Illuminate\Database\Eloquent\Relations\BelongsTo;

// class Book extends Model
// {
//     public function author(): BelongsTo
//     {
//         return $this->belongsTo(Author::class);
//     }
// }

