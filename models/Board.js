import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    hasAccess: {
        type: Boolean,
        default: false
    },
    customerId: {
        type: String,
        
    }
})

export default mongoose.models.Board || mongoose.model("Board", BoardSchema)