import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

const CareerTable = ({ careers, onDelete, onStatusChange }) => {

    const [statusMap, setStatusMap] = useState({});

    useEffect(() => {
        const initialStatus = {};

        careers.forEach((career) => {
            initialStatus[career._id] = career.status || "Pending";
        });

        setStatusMap(initialStatus);
    }, [careers]);

    const handleStatusChange = (id, status) => {

        setStatusMap((prev) => ({
            ...prev,
            [id]: status,
        }));

        onStatusChange(id, status);

    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "bg-yellow-100 text-yellow-700";
            case "Shortlisted":
                return "bg-blue-100 text-blue-700";
            case "Interview":
                return "bg-purple-100 text-purple-700";
            case "Selected":
                return "bg-green-100 text-green-700";
            case "Rejected":
                return "bg-red-100 text-red-700";
            default:
                return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="overflow-x-auto rounded-2xl bg-white shadow">

            <table className="min-w-full">

                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Name</th>
                        <th className="px-6 py-4 text-left">Email</th>
                        <th className="px-6 py-4 text-left">Phone</th>
                        <th className="px-6 py-4 text-left">Position</th>
                        <th className="px-6 py-4 text-left">Experience</th>
                        <th className="px-6 py-4 text-left">Status</th>
                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {careers.length > 0 ? (
                        careers.map((career) => (

                            <tr
                                key={career._id}
                                className="border-t hover:bg-slate-50"
                            >

                                <td className="px-6 py-4 font-medium">
                                    {career.fullName}
                                </td>

                                <td className="px-6 py-4">
                                    {career.email}
                                </td>

                                <td className="px-6 py-4">
                                    {career.phone}
                                </td>

                                <td className="px-6 py-4">
                                    {career.position}
                                </td>

                                <td className="px-6 py-4 max-w-xs">
                                    <p className="truncate">
                                        {career.experience}
                                    </p>
                                </td>

                                <td className="px-6 py-4">
                                    <select
                                        value={statusMap[career._id] || "Pending"}
                                        onChange={(e) =>
                                            handleStatusChange(career._id, e.target.value)
                                        }
                                        className={`rounded-full px-3 py-2 text-xs font-semibold border outline-none ${getStatusColor(
                                            statusMap[career._id]
                                        )}`}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Shortlisted">Shortlisted</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Selected">Selected</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>

                                <td className="px-6 py-4 text-center">

                                    <button
                                        onClick={() => onDelete(career._id)}
                                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </td>

                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="7"
                                className="py-8 text-center text-slate-500"
                            >
                                No career applications found.
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
};

export default CareerTable;