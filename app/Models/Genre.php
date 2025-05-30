<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    // Field yang bisa diisi secara massal (mass-assignment)
    protected $fillable = [
        'name',
        'description',
    ];

    // Relasi: 1 Genre memiliki banyak Buku
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}

// class Genre extends Model
// {
//     //
// }

// class Genre
// {
//     public static function all()
//     {
//         return [
//             ['id' => 1, 'name' => 'Fiksi'],
//             ['id' => 2, 'name' => 'Non-Fiksi'],
//             ['id' => 3, 'name' => 'Horor'],
//             ['id' => 4, 'name' => 'Fantasi'],
//             ['id' => 5, 'name' => 'Biografi'],
//         ];
//     }
// }

