import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const QuoteButton = ({
    text = "Request A Quote",
    className = "",
}) => {
    return (
        <Link
            to="/contact#quote-form"
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 ${className}`}
        >
            {text}
            <ArrowRight size={20} />
        </Link>
    );
};

export default QuoteButton;