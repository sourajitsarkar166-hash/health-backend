const TestResult =
require("../models/TestResult");

const getUserHistory =
async (req, res) =>
{
    try
    {
        const results =
        await TestResult.find({
            userId:
            req.params.userId
        })
        .sort({
            createdAt: -1
        });

        res.json(results);
    }
    catch(error)
    {
        res.status(500).json({
            message:
            error.message
        });
    }
};

module.exports =
{
    getUserHistory
};