import { X } from "lucide-react";

const CertificateModal = ({ certificate, onClose }) => {
    if (!certificate) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl rounded-3xl bg-white overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 z-10 rounded-full bg-white p-2 shadow-lg transition hover:bg-red-500 hover:text-white"
                >
                    <X size={22} />
                </button>

                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full max-h-[90vh] object-contain bg-slate-100"
                />
            </div>
        </div>
    );
};

export default CertificateModal;