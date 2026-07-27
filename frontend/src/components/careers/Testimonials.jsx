import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        designation: "Senior Mechanical Engineer",
        image: "/career/employee-1.jpg",
        review:
            "SteelNova has provided me with incredible opportunities to work on challenging industrial projects. The supportive environment and continuous learning culture have helped me grow both personally and professionally.",
    },
    {
        id: 2,
        name: "Priya Patel",
        designation: "Production Engineer",
        image: "/career/employee-2.jpg",
        review:
            "The collaborative work culture and advanced manufacturing technologies make SteelNova an exciting place to build a long-term engineering career.",
    },
    {
        id: 3,
        name: "Amit Verma",
        designation: "Quality Assurance Engineer",
        image: "/career/employee-3.jpg",
        review:
            "Working with experienced professionals and modern industrial equipment has significantly enhanced my technical expertise and leadership skills.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-14 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Employee Stories
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        What Our Team Says
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                        Hear from our employees about their journey,
                        professional growth and experiences at SteelNova.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {testimonials.map((employee) => (

                        <div
                            key={employee.id}
                            className="rounded-3xl bg-slate-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="flex justify-center">

                                <img
                                    src={employee.image}
                                    alt={employee.name}
                                    className="h-28 w-28 rounded-full object-cover border-4 border-blue-100"
                                />

                            </div>

                            <div className="mt-6 flex justify-center gap-1 text-yellow-500">

                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        fill="currentColor"
                                    />
                                ))}

                            </div>

                            <p className="mt-6 text-center leading-8 text-slate-600 italic">
                                "{employee.review}"
                            </p>

                            <div className="mt-8 text-center">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {employee.name}
                                </h3>

                                <p className="mt-2 text-blue-600 font-medium">
                                    {employee.designation}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Testimonials;