import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
    };

    return (
        <header className="bg-white shadow-sm px-8 py-5 flex items-center justify-between">

            <h1 className="text-2xl font-bold text-slate-800">
                SteelNova Admin
            </h1>

            <div className="flex items-center gap-5">

                <span className="text-slate-600 font-medium">
                    Welcome, Admin
                </span>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                >
                    <LogOut size={18} />
                    Logout
                </button>

            </div>

        </header>
    );
};

export default Topbar;