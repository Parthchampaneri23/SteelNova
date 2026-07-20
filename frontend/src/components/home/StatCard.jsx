import Counter from "../common/Counter";

const StatCard = ({ stat }) => {
    const Icon = stat.icon;

    return (
        <div className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={32} />
            </div>

            <h3 className="text-5xl font-extrabold text-blue-600">
                <Counter
                    end={stat.number}
                    suffix={stat.suffix}
                />
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-600">
                {stat.title}
            </p>

        </div>
    );
};

export default StatCard;