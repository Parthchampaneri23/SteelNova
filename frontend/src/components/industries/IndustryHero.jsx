const IndustryHero = () => {
    return (
        <section className="relative">

            <img
                src="/industries/industries-hero.png"
                alt="Industries"
                className="h-[300px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/65"></div>

            <div className="absolute inset-0 flex items-center">

                <div className="mx-auto w-full max-w-7xl px-4 lg:px-5">

                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                        Industries We Serve
                    </span>

                    <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
                        Engineering Reliable Industrial Solutions For Every Industry
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-lg md:leading-7">
                        SteelNova delivers world-class industrial equipment and fabrication solutions trusted across India and global markets.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default IndustryHero;