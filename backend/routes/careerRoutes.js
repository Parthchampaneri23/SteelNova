import express from "express";
import {
    applyCareer,
    getCareers,
    deleteCareer
} from "../controllers/careerController.js";

const router = express.Router();

router.post("/", applyCareer);
router.get("/", getCareers);
router.delete("/:id", deleteCareer);

export default router;