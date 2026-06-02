const {
    saveResult
}
=
require("./resultController");

const calculateBodyFat =
async (req, res) =>
{
    try
    {
        const
        {
            age,
            gender,
            bmi
        }
        =
        req.body;

        let bodyFat;

        if(gender === "male")
        {
            bodyFat =
            (1.20 * bmi) +
            (0.23 * age) -
            16.2;
        }
        else
        {
            bodyFat =
            (1.20 * bmi) +
            (0.23 * age) -
            5.4;
        }

        let category = "";

        if(bodyFat < 18)
        {
            category = "Low";
        }
        else if(bodyFat < 25)
        {
            category = "Healthy";
        }
        else if(bodyFat < 32)
        {
            category = "High";
        }
        else
        {
            category = "Obese";
        }

        let aiComment = "";

        if(category === "Healthy")
        {
            aiComment =
            "Your body fat percentage is within a healthy range.";
        }
        else if(category === "Low")
        {
            aiComment =
            "Your body fat is lower than average. Ensure adequate nutrition.";
        }
        else if(category === "High")
        {
            aiComment =
            "Your body fat percentage is above the healthy range.";
        }
        else
        {
            aiComment =
            "Your body fat percentage indicates obesity risk.";
        }

        const resultData =
{
    bodyFat:
    bodyFat.toFixed(2),

    category,

    aiComment
};

await saveResult(
    req.body.userId,
    "BodyFat",
    resultData
);

res.json(
    resultData
);

    }
    catch(error)
    {
        res.status(500).json(
        {
            message:
            error.message
        });
    }
};

module.exports =
{
    calculateBodyFat
};