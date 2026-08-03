import express from "express";
import {
    createContact,
    getContacts,
    updateContactStatus,
    deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);

// Update Status
router.put("/:id/status", updateContactStatus);

// Delete
router.delete("/:id", deleteContact);

export default router;