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
            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <Link
                    to="/projects"
                    className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                    <ArrowLeft size={18} />
                    Back to Projects
                </Link>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    <div className="overflow-hidden rounded-3xl shadow-xl lg:col-span-5">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="lg:col-span-7">

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            {project.category}
                        </span>

                        <h1 className="mt-6 text-5xl font-bold text-slate-900">
                            {project.title}
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {project.description}
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProjectDetails;
