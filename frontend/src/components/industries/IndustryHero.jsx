const IndustryHero = () => {
    return (
        <section className="relative overflow-hidden">

            <img
                src="/industries/industries-hero.png"
                alt="Industries"
                className="h-[600px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/65"></div>

            <div className="absolute inset-0 flex items-center">

                <div className="max-w-7xl mx-auto px-4 lg:px-5">

                    <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                        Industries We Serve
                    </span>

                    <h1 className="mt-6 max-w-3xl text-6xl font-bold leading-tight text-white">
                        Engineering Reliable Industrial Solutions For Every Industry
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                        SteelNova delivers world-class industrial equipment and fabrication
                        solutions trusted by leading industries across India and global markets.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default IndustryHero;