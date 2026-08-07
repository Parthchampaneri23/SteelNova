const ContactHero = () => {
    return (
        <section
            className="relative h-[280px] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/contact/contact-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-4xl px-6 text-center text-white">

                <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] sm:px-5 sm:py-2 sm:text-sm font-semibold uppercase tracking-wider">
                    Contact SteelNova
                </span>

                <h1 className="mt-2 sm:mt-6 text-xl sm:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
                    Let's Build Better Industrial Solutions Together
                </h1>

                <p className="mt-2 sm:mt-6 text-xs sm:text-lg text-slate-200 leading-5 sm:leading-8 hidden sm:block">
                    Get in touch with our engineering team for quotations,
                    technical support, product inquiries, or custom
                    manufacturing solutions.
                </p>

            </div>
        </section>
    );
};

export default ContactHero;