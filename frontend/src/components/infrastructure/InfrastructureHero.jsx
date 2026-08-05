const InfrastructureHero = () => {
    return (
        <section className="relative overflow-hidden">

            <img
                src="/infrastructure/infrastructure-hero.png"
                alt="Infrastructure"
                className="h-[400px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="absolute inset-0 flex items-center">

                <div className="max-w-7xl mx-auto px-4 lg:px-5">

                    <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                        World Class Infrastructure
                    </span>

                    <h1 className="mt-6 max-w-3xl text-6xl font-bold leading-tight text-white">
                        Advanced Manufacturing.
                        Precision Engineering.
                        Trusted Quality.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                        Equipped with cutting-edge machinery, skilled professionals,
                        and world-class manufacturing capabilities to deliver
                        reliable industrial solutions.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default InfrastructureHero;