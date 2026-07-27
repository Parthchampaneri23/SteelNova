import CareerHero from "../../components/careers/CareerHero";
import WhyJoin from "../../components/careers/WhyJoin";
import Benefits from "../../components/careers/Benefits";
import OpenPositions from "../../components/careers/OpenPositions";
import HiringProcess from "../../components/careers/HiringProcess";
import Testimonials from "../../components/careers/Testimonials";
import CareerCTA from "../../components/careers/CareerCTA";

const Career = () => {
    return (
        <>
            <CareerHero />
            <WhyJoin />
            <Benefits />
            <OpenPositions />
            <HiringProcess />
            <Testimonials />
            <CareerCTA />
        </>
    );
};

export default Career;