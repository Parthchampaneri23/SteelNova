import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-100 flex">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Topbar />

                <main className="p-8">
                    {children}
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;