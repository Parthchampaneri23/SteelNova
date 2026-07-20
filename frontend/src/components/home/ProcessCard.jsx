const ProcessCard = ({ step }) => {
    const Icon = step.icon;

    return (
        <div className="relative group text-center">

            {/* Number */}
            <div className="text-7xl font-black text-slate-100 transition-all duration-300 group-hover:text-blue-100">
                {step.number}
            </div>

            {/* Circle */}
            <div className="relative z-10 -mt-8 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={34} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
                {step.description}
            </p>

        </div>
    );
};

export default ProcessCard;