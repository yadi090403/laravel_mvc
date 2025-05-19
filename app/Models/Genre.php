<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// class Genre extends Model
// {
//     //
// }

class Genre
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'Fiksi'],
            ['id' => 2, 'name' => 'Non-Fiksi'],
            ['id' => 3, 'name' => 'Horor'],
            ['id' => 4, 'name' => 'Fantasi'],
            ['id' => 5, 'name' => 'Biografi'],
        ];
    }
}

