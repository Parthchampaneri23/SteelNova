import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { projects } from "../../data/projectsData";
import ProjectModal from "./ProjectModal";

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="bg-white py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="mb-16 text-center">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Featured Projects
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Engineering Success Stories
                    </h2>

                    <p className="mt-5 text-lg text-slate-600">
                        Delivering innovative industrial solutions across multiple industries.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-8">

                                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                                    {project.category}
                                </span>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-5 leading-7 text-slate-600">
                                    {project.description}
                                </p>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-4"
                                >
                                    View Project
                                    <ArrowRight size={18} />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </section>
    );
};

export default FeaturedProjects;