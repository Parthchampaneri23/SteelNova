import { X } from "lucide-react";

const BlogModal = ({ blog, onClose }) => {
    if (!blog) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white">

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 hover:bg-red-500 hover:text-white transition"
                >
                    <X size={22} />
                </button>

                <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-96 w-full object-cover"
                />

                <div className="p-10">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        {blog.category}
                    </span>

                    <h2 className="mt-6 text-4xl font-bold">
                        {blog.title}
                    </h2>

                    <p className="mt-2 text-slate-500">
                        {blog.date}
                    </p>

                    <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                        <p>
                            {blog.description}
                        </p>

                        <p>
                            SteelNova Industries focuses on delivering reliable engineering
                            solutions by combining advanced manufacturing, precision
                            fabrication, and strict quality standards. Every product is
                            designed to maximize operational efficiency while minimizing
                            maintenance costs.
                        </p>

                        <p>
                            Our engineering team follows internationally recognized
                            manufacturing practices to ensure every industrial solution
                            meets customer requirements for safety, durability, and
                            long-term performance.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BlogModal;