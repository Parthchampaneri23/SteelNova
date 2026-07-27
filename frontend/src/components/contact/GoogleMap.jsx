const GoogleMap = () => {
    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-12">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Visit Us
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Find Our Location
                    </h2>

                </div>

                <div className="overflow-hidden rounded-3xl shadow-xl">

                    <iframe
                        title="SteelNova Location"
                        src="https://www.google.com/maps?q=GIDC%20Vapi%20Gujarat&output=embed"
                        width="100%"
                        height="500"
                        loading="lazy"
                        allowFullScreen
                        className="border-0"
                    ></iframe>

                </div>

            </div>

        </section>
    );
};

export default GoogleMap;