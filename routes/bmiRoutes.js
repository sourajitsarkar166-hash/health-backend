const express = require("express");

const router = express.Router();

const {
    calculateBMI
} = require("../controllers/bmiController");

console.log("calculateBMI =", calculateBMI);

router.post(
    "/calculate",
    calculateBMI
);

module.exports = router;