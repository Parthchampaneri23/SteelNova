import { Link } from "react-router-dom";

const QuoteButton = () => {
    return (
        <Link
            to="/contact"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
            Get Quote
        </Link>
    );
};

export default QuoteButton;