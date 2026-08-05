import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <Link
            to="/projects"
            className="group block overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

            <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
            />

            <div className="p-8">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {project.title}
                </h3>

                <p className="mt-4 text-slate-600">
                    {project.description}
                </p>

            </div>

        </Link>
    );
};

export default ProjectCard;