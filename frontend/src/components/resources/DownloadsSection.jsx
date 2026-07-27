import {
    Download,
    FileText,
    BookOpen,
    ShieldCheck,
    FileBadge,
} from "lucide-react";

const downloads = [
    {
        id: 1,
        title: "Company Profile",
        description: "Know more about SteelNova Industries and our engineering capabilities.",
        icon: <FileText size={42} />,
    },
    {
        id: 2,
        title: "Product Catalogue",
        description: "Complete catalogue of pumps, valves, vessels and fabrication solutions.",
        icon: <BookOpen size={42} />,
    },
    {
        id: 3,
        title: "Technical Brochure",
        description: "Detailed product specifications and engineering documentation.",
        icon: <FileBadge size={42} />,
    },
    {
        id: 4,
        title: "Safety Guidelines",
        description: "Industrial safety standards and equipment handling procedures.",
        icon: <ShieldCheck size={42} />,
    },
];

const DownloadsSection = () => {
    return (
        <section className="bg-slate-50 py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Downloads
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Technical Resources
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        Access our brochures, catalogues and technical documentation.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {downloads.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="text-blue-600">
                                {item.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                {item.description}
                            </p>

                            <button
                                className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:gap-3"
                            >
                                <Download size={18} />
                                Download PDF
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default DownloadsSection;