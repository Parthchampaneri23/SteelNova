import oilGas from "../assets/images/industries/oil-gas.jpg";
import chemical from "../assets/images/industries/chemical.jpg";
import waterTreatment from "../assets/images/industries/water-treatment.jpg";
import powerPlants from "../assets/images/industries/power-plants.jpg";
import foodProcessing from "../assets/images/industries/food-processing.jpg";
import manufacturing from "../assets/images/industries/manufacturing.jpg";

export const industries = [
    {
        id: 1,
        slug: "oil-gas",
        title: "Oil & Gas",
        image: oilGas,
        description:
            "Reliable equipment engineered for upstream, midstream and downstream operations.",
    },
    {
        id: 2,
        slug: "chemical-processing",
        title: "Chemical Processing",
        image: chemical,
        description:
            "Corrosion-resistant process equipment for chemical manufacturing plants.",
    },
    {
        id: 3,
        slug: "water-treatment",
        title: "Water Treatment",
        image: waterTreatment,
        description:
            "Efficient pumping and filtration solutions for water treatment facilities.",
    },
    {
        id: 4,
        slug: "power-plants",
        title: "Power Plants",
        image: powerPlants,
        description:
            "Industrial components designed for thermal and renewable energy systems.",
    },
    {
        id: 5,
        slug: "food-beverage",
        title: "Food & Beverage",
        image: foodProcessing,
        description:
            "Hygienic stainless-steel equipment for food and beverage industries.",
    },
    {
        id: 6,
        slug: "pharmaceutical",
        title: "Pharmaceutical",
        image: manufacturing,
        description:
            "Precision engineered equipment meeting pharmaceutical quality standards.",
    },
];