<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// class Book extends Model
// {
//     protected $fillable = ['title', 'author_id', 'publication_year'];

//     public function author()
//     {
//         return $this->belongsTo(Author::class);
//     }
// }
use App\Models\Author;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }
}

