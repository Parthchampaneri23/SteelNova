const ContactHero = () => {
    return (
        <section
            className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/contact/contact-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-4xl px-6 text-center text-white">

                <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
                    Contact SteelNova
                </span>

                <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
                    Let's Build Better Industrial Solutions Together
                </h1>

                <p className="mt-6 text-lg text-slate-200 leading-8">
                    Get in touch with our engineering team for quotations,
                    technical support, product inquiries, or custom
                    manufacturing solutions.
                </p>

            </div>
        </section>
    );
};

export default ContactHero;