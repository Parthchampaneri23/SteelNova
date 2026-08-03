import Career from "../models/Career.js";

export const applyCareer = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            position,
            experience,
        } = req.body;

        const career = await Career.create({
            fullName,
            email,
            phone,
            position,
            experience,
        });

        res.status(201).json({
            success: true,
            message: "Application submitted successfully.",
            data: career,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const getCareers = async (req, res) => {

    try {

        const careers = await Career.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: careers.length,
            data: careers,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const updateCareerStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const career = await Career.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!career) {

            return res.status(404).json({
                success: false,
                message: "Application not found",
            });

        }

        res.status(200).json({
            success: true,
            message: "Status updated successfully.",
            data: career,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const deleteCareer = async (req, res) => {

    try {

        const career = await Career.findByIdAndDelete(req.params.id);

        if (!career) {

            return res.status(404).json({
                success: false,
                message: "Application not found",
            });

        }

        res.status(200).json({
            success: true,
            message: "Application deleted successfully.",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};