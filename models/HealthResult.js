const mongoose = require("mongoose");

const healthResultSchema = new mongoose.Schema(
{
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    bmi:
    {
        type: Number,
        default: null
    },

    bmiCategory:
    {
        type: String,
        default: ""
    },

    bodyFat:
    {
        type: Number,
        default: null
    },

    bodyFatCategory:
    {
        type: String,
        default: ""
    },

    calories:
    {
        type: Number,
        default: null
    },

    protein:
    {
        type: Number,
        default: null
    },

    colorBlindnessResult:
    {
        type: String,
        default: ""
    },

    hearingResult:
    {
        type: String,
        default: ""
    },

    aiAnalysis:
    {
        type: String,
        default: ""
    }

},
{
    timestamps: true
});

module.exports =
mongoose.model(
"HealthResult",
healthResultSchema
);