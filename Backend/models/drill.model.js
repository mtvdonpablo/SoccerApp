import mongoose from "mongoose";

function arrayLimit(val) {
    return val.every(age => age >= 0 && age <= 4);
}
const drillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      skill: {
        type: String,
        required: true,
      },
      minPlayers: {
        type: Number,
        required: true,
      },
      maxPlayers: {
        type: Number,
        required: true,
      },
      videoLink: {
        type: String,
        required: true,
      },
      videoThumbnail: {
        type: String,
        required: true,
      },
      individual: {
        type: Boolean,
        default: false,
      },   
      ageGroups: {
        type: [Number],  // Array of age groups (0 to 4)
        required: true,
        validate: [arrayLimit, 'Age Groups should be between 0 and 4'],
    },
}, {timestamps: true });// createdAt, updatedAt

const Drill = mongoose.model('Drill', drillSchema);

export default Drill;