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
use GuzzleHttp\Psr7\Request;

class PublicProjectController extends Controller
{
    private $project;

    public function __construct()
    {
        $this->project = Project::query()->orderBy('name', 'asc')->get()->all();
    }

    /**
     * Display a listing of the resource.
     */
    public function home()
    {
        return inertia('Public/Home/Index', ['project' => ProjectResource::collection($this->project)]);
    }

    public function about()
    {
        return inertia('Public/About/Index', ['project' => ProjectResource::collection($this->project)]);
    }

    public function services()
    {
        return inertia('Public/Services/Index', ['project' => ProjectResource::collection($this->project)]);
    }

    public function owner()
    {
        return inertia('Public/Owner/Index', ['project' => ProjectResource::collection($this->project)]);
    }

    public function show(Project $owner)
    {
        $query = $owner->tasks();
        $sortField = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'desc');

        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }

        if (request('status')) {
            $query->where('status', request('status'));
        }

        $tasks = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);

        // Display details for a specific owner
        return inertia('Public/Owner/Show', [
            'project' => new ProjectResource($owner),
            'tasks' => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'projectName' => ProjectResource::collection($this->project)
        ]);
    }

    public function sunSportingClub()
    {
        return inertia('Public/Owner/SunSportingClub');
    }

    public function contact()
    {
        return inertia('Public/Contact/Index', ['project' => ProjectResource::collection($this->project)]);
    }
}
