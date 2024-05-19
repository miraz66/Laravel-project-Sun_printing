<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PublicProjectController;

Route::redirect('/', '/home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

    Route::resource('project', ProjectController::class);
    Route::get('/task/my-task', [TaskController::class, 'myTasks'])
            ->name('task.myTasks');
    Route::resource('task', TaskController::class);
    Route::resource('user', UserController::class);
});

//Public routes
Route::get('/home', [PublicProjectController::class, 'home'])->name('public.home');
Route::get('/about', [PublicProjectController::class, 'about'])->name('public.about');
Route::get('/services', [PublicProjectController::class, 'services'])->name('public.services');
Route::get('/owner', [PublicProjectController::class, 'owner'])->name('public.owner');
Route::get('owner/{owner}', [PublicProjectController::class, 'show'])->name('public.show');

// Route::get('/owner/sunSportingClub', [PublicProjectController::class, 'sunSportingClub'])->name('public.sunSportingClub');
Route::get('/contact', [PublicProjectController::class, 'contact'])->name('public.contact');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
