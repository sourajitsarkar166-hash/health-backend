const TestResult =
require("../models/TestResult");

const saveResult =
async (
    userId,
    testType,
    resultData
) =>
{
    try
    {
        await TestResult.create({
            userId,
            testType,
            result: resultData
        });
    }
    catch(error)
    {
        console.log(
            "Result Save Error:",
            error.message
        );
    }
};

module.exports =
{
    saveResult
};