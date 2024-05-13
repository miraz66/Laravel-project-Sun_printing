<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'paragraph' => $this->paragraph,
            'address' => $this->address,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'image_path' => $this->image_path ? Storage::url($this->image_path) : null,
            'assignedUsers' => $this->assigned_users ? new UserResource($this->assigned_users) : null,
            "assigned_user_id" => $this->assigned_user_id,
            'project' => new ProjectResource($this->project),
            "project_id" => $this->project_id,
            'created_by' => new UserResource($this->createdBy),
            'updated_by' => new UserResource($this->updatedBy),
        ];
    }
}
