const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    testType:
    {
        type: String
    },

    result:
    {
        type: Object
    },

    createdAt:
    {
        type: Date,
        default: Date.now
    }
});

module.exports =
mongoose.model(
    "TestResult",
    testResultSchema
);