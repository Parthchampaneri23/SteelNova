import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className="bg-slate-50">
            <div className="max-w-7xl mx-auto min-h-[90vh] px-6 py-14 lg:py-0 flex flex-col-reverse lg:flex-row items-center">

                <div className="w-full lg:w-1/2">
                    <HeroContent />
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <HeroImage />
                </div>

            </div>
        </section>
    );
};

export default Hero;