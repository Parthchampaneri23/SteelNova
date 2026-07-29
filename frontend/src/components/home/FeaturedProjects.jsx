import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
    return (
        <section className="bg-slate-50 py-14">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Featured Projects
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Engineering Success Stories
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-slate-600">
                        Delivering innovative industrial solutions across multiple sectors.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                        View All Projects
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;