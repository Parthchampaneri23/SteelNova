const StatCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition">

            <div>
                <p className="text-slate-500 text-sm">
                    {title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-800">
                    {value}
                </h2>
            </div>

            <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color}`}
            >
                <Icon size={30} className="text-white" />
            </div>

        </div>
    );
};

export default StatCard;