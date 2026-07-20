import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl font-bold text-blue-600">404</h1>

            <h2 className="mt-4 text-3xl font-semibold text-slate-800">
                Page Not Found
            </h2>

            <p className="mt-3 text-slate-600">
                The page you are looking for does not exist.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;