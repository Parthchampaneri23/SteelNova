const AboutHero = () => {
    return (
        <section
            className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/about/hero-1.png')",
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center">
                <div className="max-w-4xl px-6 text-center text-white">

                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                        About SteelNova
                    </span>

                    <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                        Engineering Excellence <br />
                        Built To Last
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-lg md:leading-7">
                        SteelNova delivers innovative industrial solutions through
                        precision engineering, advanced manufacturing, and a
                        commitment to quality that industries worldwide trust.
                    </p>

                </div>
            </div>

        </section>
    );
};

export default AboutHero;