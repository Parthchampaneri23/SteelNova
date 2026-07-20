const FeatureCard = ({ feature }) => {
    const Icon = feature.icon;

    return (
        <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={30} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
            </p>
        </div>
    );
};

export default FeatureCard;