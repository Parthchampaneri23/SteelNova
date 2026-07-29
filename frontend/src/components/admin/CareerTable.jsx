import { Trash2 } from "lucide-react";

const CareerTable = ({ careers, onDelete }) => {
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
                                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                                        {career.status}
                                    </span>
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