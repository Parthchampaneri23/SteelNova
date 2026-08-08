import { useEffect, useState } from "react";
import axios from "axios";

import AdminLayout from "../../components/admin/AdminLayout";
import ContactTable from "../../components/admin/ContactTable";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await axios.get(
                "https://steelnova.onrender.com/api/contact"
            );

            setContacts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Update Status
    const updateContactStatus = async (id, status) => {
        try {
            await axios.put(
                `https://steelnova.onrender.com/api/contact/${id}/status`,
                { status }
            );

            fetchContacts();
        } catch (error) {
            console.log(error);
        }
    };

    // Delete Contact
    const deleteContact = async (id) => {
        if (!window.confirm("Delete this enquiry?")) return;

        try {
            await axios.delete(
                `https://steelnova.onrender.com/api/contact/${id}`
            );

            fetchContacts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>

            <h1 className="mb-8 text-3xl font-bold">
                Contact Enquiries
            </h1>

            <ContactTable
                contacts={contacts}
                onDelete={deleteContact}
                onStatusChange={updateContactStatus}
            />

        </AdminLayout>
    );
};

export default Contacts;