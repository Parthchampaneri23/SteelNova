import { useState } from "react";
import CertificateModal from "./CertificateModal";

const certificates = [
    {
        id: 1,
        image: "/resources/certificate-1.jpg",
        title: "ISO 9001 Certification",
    },
    {
        id: 2,
        image: "/resources/certificate-2.jpg",
        title: "CE Certified",
    },
    {
        id: 3,
        image: "/resources/certificate-3.jpg",
        title: "Quality Assurance",
    },
];

const CertificatesSection = () => {

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section className="bg-white py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Certifications
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Trusted Quality Standards
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                        SteelNova follows internationally recognized quality
                        standards to deliver reliable industrial solutions.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    {certificates.map((certificate) => (

                        <div
                            key={certificate.id}
                            onClick={() => setSelectedCertificate(certificate)}
                            className="group cursor-pointer rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="flex justify-center">

                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="max-w-full max-h-96 object-contain mx-auto transition duration-700 group-hover:scale-105"
                                />

                            </div>

                            <div className="p-8 text-center">

                                <h3 className="text-2xl font-bold">
                                    {certificate.title}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <CertificateModal
                certificate={selectedCertificate}
                onClose={() => setSelectedCertificate(null)}
            />

        </section>
    );
};

export default CertificatesSection;