import {
    MapPin,
    Briefcase,
    Clock,
    GraduationCap,
    IndianRupee,
    ArrowRight,
} from "lucide-react";

const positions = [
    {
        title: "Mechanical Engineer",
        location: "Vapi, Gujarat",
        type: "Full Time",
        experience: "2–5 Years",
        qualification: "B.E./B.Tech Mechanical",
        salary: "As Per Industry Standards",
        responsibilities: [
            "Design industrial equipment",
            "Coordinate with production teams",
            "Ensure quality standards",
            "Prepare technical documentation",
        ],
        skills: ["AutoCAD", "SolidWorks", "Problem Solving", "Teamwork"],
    },
    {
        title: "Production Engineer",
        location: "Vapi, Gujarat",
        type: "Full Time",
        experience: "1–3 Years",
        qualification: "B.E./B.Tech Production",
        salary: "As Per Industry Standards",
        responsibilities: [
            "Monitor production processes",
            "Improve manufacturing efficiency",
            "Coordinate shop floor activities",
            "Maintain production reports",
        ],
        skills: [
            "Production Planning",
            "MS Excel",
            "Leadership",
            "Communication",
        ],
    },
    {
        title: "Quality Engineer",
        location: "Vapi, Gujarat",
        type: "Full Time",
        experience: "2+ Years",
        qualification: "B.E./B.Tech Mechanical",
        salary: "As Per Industry Standards",
        responsibilities: [
            "Inspect manufactured products",
            "Maintain quality records",
            "Implement QA procedures",
            "Support customer audits",
        ],
        skills: [
            "Quality Control",
            "ISO 9001",
            "Inspection",
            "Documentation",
        ],
    },
    {
        title: "Design Engineer",
        location: "Vapi, Gujarat",
        type: "Full Time",
        experience: "2+ Years",
        qualification: "Mechanical Engineering",
        salary: "As Per Industry Standards",
        responsibilities: [
            "Create engineering drawings",
            "Develop 3D models",
            "Support project execution",
            "Optimize product designs",
        ],
        skills: [
            "AutoCAD",
            "SolidWorks",
            "CAD Design",
            "Creativity",
        ],
    },
    {
        title: "Maintenance Engineer",
        location: "Vapi, Gujarat",
        type: "Full Time",
        experience: "3+ Years",
        qualification: "Mechanical/Electrical Engineering",
        salary: "As Per Industry Standards",
        responsibilities: [
            "Maintain plant equipment",
            "Preventive maintenance",
            "Troubleshoot breakdowns",
            "Maintain maintenance records",
        ],
        skills: [
            "PLC Basics",
            "Maintenance",
            "Troubleshooting",
            "Safety",
        ],
    },
    {
        title: "Sales Engineer",
        location: "Mumbai / Gujarat",
        type: "Full Time",
        experience: "2+ Years",
        qualification: "Engineering Graduate",
        salary: "Attractive Incentives",
        responsibilities: [
            "Generate new business",
            "Meet industrial clients",
            "Prepare quotations",
            "Provide technical support",
        ],
        skills: [
            "Sales",
            "Negotiation",
            "Communication",
            "Customer Handling",
        ],
    },
];

const OpenPositions = () => {
    return (
        <section id="positions" className="py-14 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Current Openings
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Join Our Growing Team
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                        Explore exciting career opportunities and become part
                        of a company that values innovation, teamwork and
                        engineering excellence.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {positions.map((job, index) => (

                        <div
                            key={index}
                            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <h3 className="text-3xl font-bold text-slate-900">
                                {job.title}
                            </h3>

                            <div className="mt-6 space-y-3 text-slate-600">

                                <div className="flex items-center gap-2">
                                    <MapPin size={18} />
                                    {job.location}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Briefcase size={18} />
                                    {job.type}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    {job.experience}
                                </div>

                                <div className="flex items-center gap-2">
                                    <GraduationCap size={18} />
                                    {job.qualification}
                                </div>

                                <div className="flex items-center gap-2">
                                    <IndianRupee size={18} />
                                    {job.salary}
                                </div>

                            </div>

                            <div className="mt-8">

                                <h4 className="font-bold text-slate-900">
                                    Responsibilities
                                </h4>

                                <ul className="mt-3 space-y-2 text-slate-600">

                                    {job.responsibilities.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}

                                </ul>

                            </div>

                            <div className="mt-8">

                                <h4 className="font-bold text-slate-900">
                                    Key Skills
                                </h4>

                                <div className="mt-4 flex flex-wrap gap-2">

                                    {job.skills.map((skill, i) => (

                                        <span
                                            key={i}
                                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            <button
                                onClick={() => {
                                    document
                                        .getElementById("apply")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Apply Now
                                <ArrowRight size={18} />
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default OpenPositions;