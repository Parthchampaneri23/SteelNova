const ManufacturingFacility = () => {
    return (
        <section className="py-14 bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-5 grid lg:grid-cols-2 gap-16 items-stretch">

                <div className="overflow-hidden rounded-3xl shadow-xl min-h-[400px]">
                    <img
                        src="/infrastructure/manufacturing-facility.png"
                        alt="Manufacturing Facility"
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                </div>

                <div>

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Manufacturing Facility
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Built For Large Scale Industrial Production
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Our facility combines advanced fabrication technology,
                        experienced engineers, and strict quality control to
                        manufacture reliable industrial equipment.
                    </p>

                    <ul className="mt-8 space-y-4 text-slate-700">
                        <li>✔ CNC Machining</li>
                        <li>✔ Heavy Fabrication Workshop</li>
                        <li>✔ Precision Welding</li>
                        <li>✔ Assembly & Testing</li>
                    </ul>

                </div>

            </div>

        </section>
    );
};

export default ManufacturingFacility;