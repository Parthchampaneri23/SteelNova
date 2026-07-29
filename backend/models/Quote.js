import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        product: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Quote", quoteSchema);