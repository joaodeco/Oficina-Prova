import db from "../config/db.js";
import mongoose from "mongoose";

const maintenanceSchema = new db.Schema({
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    services: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    date: {
        type: Date,
        required: true
    }
});

const Maintenance = db.model("Maintenance", maintenanceSchema);

export default Maintenance


