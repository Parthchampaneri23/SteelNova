import InfrastructureHero from "../../components/infrastructure/InfrastructureHero";
import ManufacturingFacility from "../../components/infrastructure/ManufacturingFacility";
import AdvancedMachinery from "../../components/infrastructure/AdvancedMachinery";
import QualityControl from "../../components/infrastructure/QualityControl";
import InfrastructureStats from "../../components/infrastructure/InfrastructureStats";
import InfrastructureCTA from "../../components/infrastructure/InfrastructureCTA";


const Infrastructure = () => {
    return (
        <>
            <InfrastructureHero />
            <ManufacturingFacility />
            <AdvancedMachinery />
            <QualityControl />
            <InfrastructureStats />
            <InfrastructureCTA />
        </>
    );
};

export default Infrastructure;