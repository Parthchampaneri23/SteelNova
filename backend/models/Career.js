import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
        },

        position: {
            type: String,
            required: true,
        },

        experience: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Reviewed", "Shortlisted", "Rejected"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Career", careerSchema);