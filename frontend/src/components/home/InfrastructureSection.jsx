import infrastructureImage from "../../assets/images/industries/infrastructure.png";

const InfrastructureSection = () => {
    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <img
                    src={infrastructureImage}
                    alt="Infrastructure"
                    className="rounded-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />

                <div>

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Infrastructure
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Modern Manufacturing Facility
                    </h2>

                    <p className="mt-6 text-slate-600 leading-8">
                        Our state-of-the-art manufacturing facility is equipped
                        with advanced machinery, precision fabrication tools,
                        testing laboratories and experienced engineers.
                    </p>

                    <div className="mt-8 space-y-4">
                        <div>✔ CNC Machining</div>
                        <div>✔ Welding & Fabrication</div>
                        <div>✔ Quality Inspection</div>
                        <div>✔ International Standards</div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default InfrastructureSection;