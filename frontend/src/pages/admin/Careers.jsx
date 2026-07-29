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
                "http://localhost:5000/api/careers"
            );

            setCareers(res.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteCareer = async (id) => {

        if (!window.confirm("Delete this application?")) return;

        try {

            await axios.delete(
                `http://localhost:5000/api/careers/${id}`
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
            />

        </AdminLayout>

    );
};

export default Careers;