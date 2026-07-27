import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="hidden lg:block bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto h-10 px-6 flex items-center justify-between text-sm">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-blue-500 text-xs" />
                        <span>+91 98765 43210</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-blue-500 text-xs" />
                        <span>sales@steelnova.com</span>
                    </div>
                </div>

                <a href="https://www.google.com/maps/search/?api=1&query=GIDC%20Vapi%20Gujarat%20India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-500 text-xs" />
                    <span>GIDC, Vapi, Gujarat, India</span>
                </a>
            </div>
        </div>
    );
};

export default TopBar;