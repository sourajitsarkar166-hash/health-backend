const {
    saveResult
}
=
require("./resultController");

const calculateBMI =
async (req, res) =>
{
    try
    {
        const
        {
            height,
            weight
        }
        =
        req.body;

        const bmi =
        weight /
        ((height / 100) * (height / 100));

        let category = "";

        if(bmi < 18.5)
        {
            category = "Underweight";
        }
        else if(bmi < 25)
        {
            category = "Normal Weight";
        }
        else if(bmi < 30)
        {
            category = "Overweight";
        }
        else
        {
            category = "Obese";
        }

        let aiComment = "";

if(category === "Underweight")
{
    aiComment =
    "Your BMI is lower than the recommended range. Consider increasing nutrient-rich calorie intake and strength training.";
}
else if(category === "Normal Weight")
{
    aiComment =
    "Your BMI falls within the healthy range. Compared to the general population, your weight is considered balanced.";
}
else if(category === "Overweight")
{
    aiComment =
    "Your BMI is slightly above the healthy range. Increasing physical activity and reducing processed foods may help.";
}
else
{
    aiComment =
    "Your BMI falls in the obese range. Consider consulting a healthcare professional for a personalized health plan.";
}

const resultData =
{
    bmi:
    bmi.toFixed(2),

    category,

    aiComment
};

await saveResult(
    req.body.userId,
    "BMI",
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
    calculateBMI
};