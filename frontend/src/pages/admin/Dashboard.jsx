import { useEffect, useState } from "react";
import axios from "axios";

import {
    Mail,
    Briefcase,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import StatCard from "../../components/admin/StatCard";

const Dashboard = () => {

    const [contacts, setContacts] = useState(0);
    const [careers, setCareers] = useState(0);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            const contactRes = await axios.get(
                "http://localhost:5000/api/contact"
            );

            const careerRes = await axios.get(
                "http://localhost:5000/api/career"
            );

            setContacts(contactRes.data.count);

            setCareers(careerRes.data.count);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <AdminLayout>

            <h1 className="text-3xl font-bold text-slate-800 mb-8">
                Dashboard
            </h1>

            <div className="grid md:grid-cols-2 gap-8">

                <StatCard
                    title="Total Contact Enquiries"
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

            </div>

        </AdminLayout>

    );
};

export default Dashboard;