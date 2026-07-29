import { Trash2 } from "lucide-react";

const ContactTable = ({ contacts, onDelete }) => {
    return (
        <div className="overflow-x-auto rounded-2xl bg-white shadow">

            <table className="min-w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-6 py-4 text-left">Name</th>
                        <th className="px-6 py-4 text-left">Email</th>
                        <th className="px-6 py-4 text-left">Phone</th>
                        <th className="px-6 py-4 text-left">Subject</th>
                        <th className="px-6 py-4 text-left">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {contacts.map((contact) => (

                        <tr
                            key={contact._id}
                            className="border-t hover:bg-slate-50"
                        >

                            <td className="px-6 py-4">
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

                                <button
                                    onClick={() => onDelete(contact._id)}
                                    className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                                >
                                    <Trash2 size={18} />
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default ContactTable;