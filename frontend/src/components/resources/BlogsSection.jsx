import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { blogs } from "../../data/blogsData";
import BlogModal from "./BlogModal";

const BlogsSection = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section className="bg-white py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Latest Articles
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Engineering Insights
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        Explore expert insights, engineering best practices and
                        industry trends from SteelNova's technical team.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {blogs.map((blog) => (

                        <div
                            key={blog.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-8">

                                <div className="flex items-center justify-between">

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                                        {blog.category}
                                    </span>

                                    <span className="text-sm text-slate-500">
                                        {blog.date}
                                    </span>

                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    {blog.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {blog.description}
                                </p>

                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-4"
                                >
                                    Read More
                                    <ArrowRight size={18} />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <BlogModal
                blog={selectedBlog}
                onClose={() => setSelectedBlog(null)}
            />

        </section>
    );
};

export default BlogsSection;