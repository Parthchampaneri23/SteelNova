import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {

    try {

        const contact = await Contact.create(req.body);

        res.status(201).json({
            success: true,
            message: "Contact submitted successfully.",
            data: contact,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

// UPDATE CONTACT STATUS
export const updateContactStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!contact) {

            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });

        }

        res.status(200).json({
            success: true,
            message: "Status updated successfully.",
            data: contact,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const deleteContact = async (req, res) => {

    try {

        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {

            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });

        }

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully.",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};