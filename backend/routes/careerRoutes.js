import express from "express";
import {
    applyCareer,
    getCareers,
    deleteCareer,
    updateCareerStatus,
} from "../controllers/careerController.js";

const router = express.Router();

router.post("/", applyCareer);
router.get("/", getCareers);
router.put("/:id/status", updateCareerStatus);
router.delete("/:id", deleteCareer);

export default router;