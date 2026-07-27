import {
    FileText,
    Search,
    Users,
    MessageCircle,
    BadgeCheck,
} from "lucide-react";

const steps = [
    {
        icon: <FileText size={36} />,
        title: "Apply",
        description: "Submit your application through our career portal.",
    },
    {
        icon: <Search size={36} />,
        title: "Resume Review",
        description: "Our HR team carefully reviews your profile.",
    },
    {
        icon: <Users size={36} />,
        title: "Technical Interview",
        description: "Meet our engineering experts and showcase your skills.",
    },
    {
        icon: <MessageCircle size={36} />,
        title: "HR Interview",
        description: "Discuss culture, growth opportunities and benefits.",
    },
    {
        icon: <BadgeCheck size={36} />,
        title: "Offer Letter",
        description: "Welcome to SteelNova and begin your journey.",
    },
];

const HiringProcess = () => {
    return (
        <section className="py-16 bg-slate-50">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Hiring Process
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Your Journey Starts Here
                    </h2>

                </div>

                <div className="grid gap-8 md:grid-cols-5">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className="relative rounded-3xl bg-white p-8 shadow-lg text-center hover:-translate-y-2 transition"
                        >

                            <div className="inline-flex rounded-full bg-blue-100 p-4 text-blue-600">
                                {step.icon}
                            </div>

                            <h3 className="mt-5 text-2xl font-bold">
                                {step.title}
                            </h3>

                            <p className="mt-4 text-slate-600">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default HiringProcess;