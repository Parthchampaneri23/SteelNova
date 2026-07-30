import { useEffect, useState } from "react";
import axios from "axios";

import {
    Mail,
    Briefcase,
    Clock3,
    CalendarDays,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import StatCard from "../../components/admin/StatCard";

const Dashboard = () => {
    const [contacts, setContacts] = useState(0);
    const [careers, setCareers] = useState(0);
    const [pending, setPending] = useState(0);
    const [today, setToday] = useState(0);
    const [recentCareers, setRecentCareers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const contactRes = await axios.get(
                "http://localhost:5000/api/contact"
            );

            const careerRes = await axios.get(
                "http://localhost:5000/api/careers"
            );

            setContacts(contactRes.data.count);
            setCareers(careerRes.data.count);

            const pendingApplications = careerRes.data.data.filter(
                (career) => career.status === "Pending"
            ).length;

            setPending(pendingApplications);

            const todayDate = new Date().toDateString();

            const todayApplications = careerRes.data.data.filter(
                (career) =>
                    new Date(career.createdAt).toDateString() === todayDate
            ).length;

            setToday(todayApplications);

            setRecentCareers(careerRes.data.data.slice(0, 5));

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>

            <h1 className="mb-8 text-3xl font-bold text-slate-800">
                Dashboard
            </h1>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Total Contacts"
                    value={contacts}
                    icon={Mail}
                    color="bg-blue-600"
                />

                <StatCard
                    title="Career Applications"
                    value={careers}
                    icon={Briefcase}
                    color="bg-green-600"
                />

                <StatCard
                    title="Pending Applications"
                    value={pending}
                    icon={Clock3}
                    color="bg-yellow-500"
                />

                <StatCard
                    title="Today's Applications"
                    value={today}
                    icon={CalendarDays}
                    color="bg-purple-600"
                />

            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow">

                <h2 className="mb-5 text-xl font-bold text-slate-800">
                    Recent Career Applications
                </h2>

                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead className="bg-slate-100">

                            <tr>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Position</th>
                                <th className="px-4 py-3 text-left">Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {recentCareers.length > 0 ? (

                                recentCareers.map((career) => (

                                    <tr
                                        key={career._id}
                                        className="border-b hover:bg-slate-50"
                                    >

                                        <td className="px-4 py-3 font-medium">
                                            {career.fullName}
                                        </td>

                                        <td className="px-4 py-3">
                                            {career.email}
                                        </td>

                                        <td className="px-4 py-3">
                                            {career.position}
                                        </td>

                                        <td className="px-4 py-3">

                                            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                                                {career.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="py-6 text-center text-slate-500"
                                    >
                                        No applications found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </AdminLayout>
    );
};

export default Dashboard;