const InfrastructureHero = () => {
    return (
        <section className="relative">

            <img
                src="/infrastructure/infrastructure-hero.png"
                alt="Infrastructure"
                className="h-[300px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="absolute inset-0 flex items-center">

                <div className="mx-auto w-full max-w-7xl px-4 lg:px-5">

                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                        World Class Infrastructure
                    </span>

                    <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
                        Advanced Manufacturing.
                        Precision Engineering.
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-lg md:leading-7">
                        Equipped with advanced machinery and skilled professionals to deliver reliable industrial solution
                    </p>

                </div>

            </div>

        </section>
    );
};

export default InfrastructureHero;