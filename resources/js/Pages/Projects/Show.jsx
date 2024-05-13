import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TaskTable from "../Tasks/TaskTable";

export default function Show({ auth, project, tasks, queryParams = null }) {
    console.log(project);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Project ${project.name}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-400 bg-gray-800">
                            <div className="relative">
                                <img
                                    className="w-full h-96 object-cover"
                                    src={project.image_path}
                                    alt="fake image"
                                />
                                <img
                                    className="absolute top-0 left-0 w-32 h-32 rounded-2xl"
                                    src={project.logo_path}
                                    alt=""
                                />
                            </div>
                            <div className="grid grid-cols-2 pt-10">
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-lg font-bold">
                                            Project ID
                                        </label>
                                        <p>{project.id}</p>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold">
                                            Project Name
                                        </label>
                                        <p>{project.name}</p>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold">
                                            Created By
                                        </label>
                                        <p>{project.created_by.name}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-lg font-bold">
                                            Created Date
                                        </label>
                                        <p className="font-serif">
                                            {project.created_at}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold">
                                            Updated By
                                        </label>
                                        <p>{project.updated_by.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 space-y-2">
                                <label className="text-lg font-bold">
                                    Project description
                                </label>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {tasks.data.length !== 0 ? (
                <div className="pb-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-4 ">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-400 bg-gray-800">
                                <TaskTable
                                    queryParams={queryParams}
                                    tasks={tasks}
                                    routeId={project.id}
                                    routeName={"project.show"}
                                    hideProjectColumn={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </AuthenticatedLayout>
    );
}
