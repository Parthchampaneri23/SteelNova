import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const ContactTable = ({ contacts, onDelete, onStatusChange }) => {

    const [statusMap, setStatusMap] = useState({});

    useEffect(() => {

        const initialStatus = {};

        contacts.forEach((contact) => {
            initialStatus[contact._id] = contact.status || "Pending";
        });

        setStatusMap(initialStatus);

    }, [contacts]);

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

            case "In Progress":
                return "bg-blue-100 text-blue-700";

            case "Resolved":
                return "bg-green-100 text-green-700";

            case "Closed":
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
                        <th className="px-6 py-4 text-left">Subject</th>
                        <th className="px-6 py-4 text-left">Status</th>
                        <th className="px-6 py-4 text-center">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {contacts.length > 0 ? (

                        contacts.map((contact) => (

                            <tr
                                key={contact._id}
                                className="border-t hover:bg-slate-50"
                            >

                                <td className="px-6 py-4 font-medium">
                                    {contact.name}
                                </td>

                                <td className="px-6 py-4">
                                    {contact.email}
                                </td>

                                <td className="px-6 py-4">
                                    {contact.phone}
                                </td>

                                <td className="px-6 py-4">
                                    {contact.subject}
                                </td>

                                <td className="px-6 py-4">

                                    <select
                                        value={statusMap[contact._id] || "Pending"}
                                        onChange={(e) =>
                                            handleStatusChange(contact._id, e.target.value)
                                        }
                                        className={`rounded-full px-3 py-2 text-xs font-semibold border outline-none ${getStatusColor(
                                            statusMap[contact._id]
                                        )}`}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                        <option value="Closed">Closed</option>
                                    </select>

                                </td>

                                <td className="px-6 py-4 text-center">

                                    <button
                                        onClick={() => onDelete(contact._id)}
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
                                colSpan="6"
                                className="py-8 text-center text-slate-500"
                            >
                                No contact enquiries found.
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
};

export default ContactTable;