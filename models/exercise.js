const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;