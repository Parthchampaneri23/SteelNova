import { X, CheckCircle2 } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                />

                <div className="p-8">

                    <div className="flex items-start justify-between">

                        <div>
                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                                {project.category}
                            </span>

                            <h2 className="mt-5 text-4xl font-bold">
                                {project.title}
                            </h2>
                        </div>

                        <button onClick={onClose}>
                            <X />
                        </button>

                    </div>

                    <p className="mt-6 text-slate-600 leading-8">
                        {project.description}
                    </p>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">

                        <div>
                            <h3 className="font-bold text-xl mb-3">
                                Project Details
                            </h3>

                            <p><strong>Industry:</strong> {project.category}</p>
                            <p><strong>Status:</strong> Completed</p>
                            <p><strong>Quality:</strong> ISO Certified</p>
                            <p><strong>Support:</strong> Installation & Commissioning</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl mb-3">
                                Highlights
                            </h3>

                            {[
                                "High Performance Equipment",
                                "On-Time Delivery",
                                "Precision Engineering",
                                "Long Service Life",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 mb-3"
                                >
                                    <CheckCircle2 className="text-blue-600" size={18} />
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;