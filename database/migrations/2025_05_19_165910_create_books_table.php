<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('description')->nullable();
        $table->decimal('price', 10, 2);
        $table->integer('stock');
        $table->string('cover_photo')->nullable();
        $table->foreignId('genre_id')->constrained('genres');
        $table->foreignId('author_id')->constrained('authors');
        $table->timestamps();
    });
        // Schema::create('books', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('title');
        //     $table->unsignedBigInteger('author_id');
        //     $table->year('publication_year');
        //     $table->timestamps();
        //     $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }

    // public function up(): void
    // {
    //     Schema::create('books', function (Blueprint $table) {
    //         $table->id();
    //         $table->string('title');
    //         $table->unsignedBigInteger('author_id');
    //         $table->year('publication_year');
    //         $table->timestamps();

    //         $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
    //     });
    // }

};
