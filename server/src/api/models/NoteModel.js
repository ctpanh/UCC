import mongoose, { Schema } from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        status: {
            type: Number,
            default: false,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Note', noteSchema);