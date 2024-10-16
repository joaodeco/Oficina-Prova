import db from "../config/db.js";
import mongoose from "mongoose";

const vehicleSchema = new db.Schema({
    plate: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintenaces: {
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    }
});

const Vehicle = db.model("Vehicle", vehicleSchema);

export default Vehicle