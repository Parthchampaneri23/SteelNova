import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
            />

            <div className="p-8">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                </h3>

                <p className="mt-4 text-slate-600">
                    {project.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
                    View Project
                    <ArrowRight size={18} />
                </button>

            </div>

        </div>
    );
};

export default ProjectCard;