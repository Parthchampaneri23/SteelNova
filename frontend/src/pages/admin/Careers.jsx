import { useEffect, useState } from "react";
import axios from "axios";

import AdminLayout from "../../components/admin/AdminLayout";
import CareerTable from "../../components/admin/CareerTable";

const Careers = () => {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        fetchCareers();
    }, []);

    const fetchCareers = async () => {
        try {
            const res = await axios.get(
                "https://steelnova.onrender.com/api/careers"
            );

            setCareers(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Update Status
    const updateCareerStatus = async (id, status) => {
        try {
            await axios.put(
                `https://steelnova.onrender.com/api/careers/${id}/status`,
                { status }
            );

            fetchCareers();
        } catch (error) {
            console.log(error);
        }
    };

    // Delete Career
    const deleteCareer = async (id) => {
        if (!window.confirm("Delete this application?")) return;

        try {
            await axios.delete(
                `https://steelnova.onrender.com/api/careers/${id}`
            );

            fetchCareers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>

            <h1 className="mb-8 text-3xl font-bold">
                Career Applications
            </h1>

            <CareerTable
                careers={careers}
                onDelete={deleteCareer}
                onStatusChange={updateCareerStatus}
            />

        </AdminLayout>
    );
};

export default Careers;