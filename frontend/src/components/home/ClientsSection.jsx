import { clients } from "../../data/clients";

const ClientsSection = () => {
    return (
        <section className="bg-white py-16 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                    Trusted By Industry Leaders
                </span>

                <h2 className="mt-4 text-5xl font-bold text-slate-900">
                    Our Valued Clients
                </h2>

                <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                    Building long-term partnerships by delivering reliable industrial
                    engineering solutions across multiple sectors.
                </p>

            </div>

            {/* Logo Slider */}

            <div className="relative mt-16 overflow-hidden">

                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

                <div className="flex animate-scroll whitespace-nowrap">

                    {[...clients, ...clients].map((logo, index) => (

                        <div
                            key={index}
                            className="group mx-8 flex h-36 w-56 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 hover:shadow-2xl"
                        >

                            <img
                                src={logo}
                                alt="Client"
                                className="max-h-20 max-w-[150px] object-contain transition-all duration-300 group-hover:scale-110"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default ClientsSection;