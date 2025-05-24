<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// class Penulis extends Model
// {
//     //
// }

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

    class Author extends Model
    {
        protected $fillable = ['name', 'bio'];
    }

// class Author
// {
//     public static function all()
//     {
//         return [
//             ['id' => 1, 'name' => 'Mahmudi'],
//             ['id' => 2, 'name' => 'Andrea Hirata'],
//             ['id' => 3, 'name' => 'Dewi Lestari'],
//             ['id' => 4, 'name' => 'Pramoedya Ananta Toer'],
//             ['id' => 5, 'name' => 'Habiburrahman El Shirazy'],
//         ];
//     }
// }
