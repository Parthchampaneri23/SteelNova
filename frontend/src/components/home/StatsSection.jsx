import { stats } from "../../data/stats";
import StatCard from "./StatCard";

const StatsSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="text-blue-600 font-semibold uppercase tracking-widest">
                        Our Achievements
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Engineering Success Through Innovation
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Delivering reliable industrial solutions with advanced
                        manufacturing capabilities, global reach, and a commitment
                        to quality.
                    </p>

                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.id}
                            stat={stat}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;