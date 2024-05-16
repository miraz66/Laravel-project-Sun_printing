<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use App\Models\Project;
use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdateTaskRequest;

class PublicProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function home()
    {
        return inertia('Public/Home/Index');
    }
    
    public function about()
    {
        return inertia('Public/About/Index');
    }
    
    public function services()
    {
        return inertia('Public/Services/Index');
    }
    
    public function owner()
    {
        return inertia('Public/Owner/Index');
    }
    
    public function contact()
    {
        return inertia('Public/Contact/Index');
    }

}
