import { useEffect, useRef, useState } from "react";

const ProcessCard = ({ step }) => {
    const Icon = step.icon;
    const cardRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group flex flex-col items-center bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-2 transition-all transform duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:scale-105 hover:shadow-lg`}
        >
            {/* Number */}
            <div className="text-6xl font-black text-slate-400 transition-colors duration-300 group-hover:text-slate-800 group-hover:rotate-6">
                {step.number}
            </div>



            {/* Circle */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={34} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600 text-center transition-colors duration-300 group-hover:text-slate-800">
                {step.description}
            </p>
        </div>
    );
};

export default ProcessCard;