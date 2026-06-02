const {
    saveResult
}
=
require("./resultController");

const calculateCalories = async (req, res) =>
{
    try
    {
        const
        {
            age,
            gender,
            weight,
            height,
            activityLevel
        }
        =
        req.body;

        let bmr;

        if(gender === "male")
        {
            bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5;
        }
        else
        {
            bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) -
            161;
        }

        let multiplier = 1.2;

        if(activityLevel === "light")
        {
            multiplier = 1.375;
        }
        else if(activityLevel === "moderate")
        {
            multiplier = 1.55;
        }
        else if(activityLevel === "active")
        {
            multiplier = 1.725;
        }

        const dailyCalories =
        Math.round(
            bmr * multiplier
        );

        const protein =
        Math.round(
            weight * 1.8
        );

        let aiComment =
        `Based on your profile, you should consume approximately ${dailyCalories} calories and ${protein}g protein daily.`;

        const resultData =
{
    dailyCalories,

    protein,

    aiComment
};

await saveResult(
    req.body.userId,
    "Calories",
    resultData
);

res.json(
    resultData
);
            
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
    calculateCalories
};