import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 ${visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-5 opacity-0"
                }`}
        >
            <ChevronUp size={26} />
        </button>
    );
};

export default BackToTop;