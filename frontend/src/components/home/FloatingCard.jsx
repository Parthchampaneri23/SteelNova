const FloatingCard = ({ value, title }) => {
    return (
        <div className="rounded-2xl bg-white px-6 py-4 shadow-2xl border border-slate-100 min-w-[170px]">
            <h3 className="text-3xl font-bold text-blue-600">
                {value}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
                {title}
            </p>
        </div>
    );
};

export default FloatingCard;