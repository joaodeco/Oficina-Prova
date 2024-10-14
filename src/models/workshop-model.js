import db from "../config/db.js";

const workshopSchema = new db.Schema({
    name: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    specialties: {
        type: [String],
        required: true
    }
});

const Workshop = db.model("Workshop", workshopSchema);

export default Workshop