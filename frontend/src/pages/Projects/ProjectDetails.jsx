import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../../data/projectsData";

const ProjectDetails = () => {
    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return (
            <section className="py-14 text-center">
                <h2 className="text-4xl font-bold">
                    Project Not Found
                </h2>

                <Link
                    to="/projects"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white"
                >
                    <ArrowLeft size={18} />
                    Back to Projects
                </Link>
            </section>
        );
    }

    return (
        <section className="bg-slate-50 py-14">
            <div className="mx-auto max-w-7xl px-4 lg:px-5">

                {/* Back Button */}
                <Link
                    to="/projects"
                    className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                    <ArrowLeft size={18} />
                    Back to Projects
                </Link>

                {/* Project Content */}
                <div className="grid items-stretch gap-12 lg:grid-cols-12">

                    {/* Project Image */}
                    <div className="overflow-hidden rounded-3xl shadow-xl lg:col-span-5">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full lg:min-h-[420px]"
                        />
                    </div>

                    {/* Project Information */}
                    <div className="flex flex-col justify-center lg:col-span-7">

                        <span className="inline-block w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            {project.category}
                        </span>

                        <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                            {project.title}
                        </h1>

                        <div className="mt-6 h-1 w-16 rounded-full bg-blue-600"></div>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {project.detailsDescription}
                        </p>

                        {/* Project Information Cards */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            <div className="rounded-xl bg-white p-5 shadow-sm">
                                <p className="text-sm font-semibold text-slate-400">
                                    Industry
                                </p>

                                <p className="mt-1 font-semibold text-slate-800">
                                    {project.category}
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-sm">
                                <p className="text-sm font-semibold text-slate-400">
                                    Project Status
                                </p>

                                <p className="mt-1 font-semibold text-green-600">
                                    Completed
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProjectDetails;