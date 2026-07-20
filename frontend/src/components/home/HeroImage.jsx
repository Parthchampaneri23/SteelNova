import heroImage from "../../assets/images/hero/hero-banner.png";

const HeroImage = () => {
    return (
        <div className="relative flex justify-center">
            <img
                src={heroImage}
                alt="SteelNova Industrial Equipment"
                className="w-full max-w-2xl object-contain"
            />
        </div>
    );
};

export default HeroImage;