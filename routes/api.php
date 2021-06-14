<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\MemberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('blog', [BlogsController::class, 'index']);
Route::post('blog', [BlogsController::class, 'store']);
Route::put('blog/{id}', [BlogsController::class, 'update']);
Route::get('blog/{id}', [BlogsController::class, 'show']);
Route::get('blog/random/{id}', [BlogsController::class, 'random']);
Route::delete('blog/{id}', [BlogsController::class, 'destroy']);

Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/register', [AuthController::class, 'register']);

Route::group(['prefix' => 'auth', 'middleware' => 'auth:sanctum'], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('me',  [AuthController::class, 'me']);
});
