const ContactHero = () => {
    return (
        <section
            className="relative h-[280px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/contact/contact-hero.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-5 text-white">
                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider sm:px-3.5 sm:py-1 sm:text-[10px]">
                    Contact SteelNova
                </span>

                <h1 className="mt-2 max-w-2xl text-xl font-bold leading-tight sm:mt-2.5 sm:text-3xl lg:text-4xl">
                    Advanced Manufacturing. Trusted Quality.
                </h1>

                <p className="mt-2 max-w-xl text-xs leading-5 text-slate-200 sm:mt-2.5 sm:text-sm sm:leading-6">
                    Equipped with cutting-edge machinery, skilled professionals,
                    and world-class manufacturing capabilities to deliver reliable
                    industrial solutions.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;