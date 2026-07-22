import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const QuoteButton = ({
    text = "Request A Quote",
    className = "",
}) => {
    return (
        <Link
            to="/contact#quote-form"
            className={`inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 ${className}`}
        >
            {text}
            <ArrowRight size={20} />
        </Link>
    );
};

export default QuoteButton;