const express =
require("express");

const router =
express.Router();

const {
    calculateCalories
}
=
require(
"../controllers/calorieController"
);

router.post(
"/calculate",
calculateCalories
);

module.exports =
router;