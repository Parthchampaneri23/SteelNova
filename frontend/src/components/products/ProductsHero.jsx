const ProductsHero = () => {
    return (
        <section
            className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/products/products-hero.png')",
            }}
        >
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-5xl px-6 text-center text-white">

                <span className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
                    Our Products
                </span>

                <h1 className="mt-6 text-5xl md:text-6xl font-bold">
                    Engineered For Every Industry
                </h1>

                <p className="mt-6 text-lg md:text-xl text-slate-200 leading-8">
                    SteelNova manufactures premium industrial equipment including
                    pumps, valves, pressure vessels, heat exchangers,
                    storage tanks and custom fabrication solutions trusted by
                    industries worldwide.
                </p>

            </div>

        </section>
    );
};

export default ProductsHero;