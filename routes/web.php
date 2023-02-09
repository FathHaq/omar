<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WarehouseActivityController;
use App\Http\Controllers\WarehouseController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

Route::resource('posts', PostController::class);

Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/activity/masuk', [warehouseActivityController::class, 'masuk'])->name('activity.masuk');
    Route::get('/activity/keluar', [warehouseActivityController::class, 'keluar'])->name('activity.keluar');
    Route::resource('/', DashboardController::class);
    Route::resource('/warehouse', WarehouseController::class);
    Route::resource('/activity', WarehouseActivityController::class);
    Route::resource('/item', ItemController::class);
});

Route::middleware(['auth', 'role:admin|crew'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('warehouse', [WarehouseController::class, 'index'])->name('crew.warehouse');
    Route::get('activity', [WarehouseActivityController::class, 'index'])->name('crew.activity');
    Route::get('item', [ItemController::class, 'index'])->name('crew.item');
});

require __DIR__.'/auth.php';
