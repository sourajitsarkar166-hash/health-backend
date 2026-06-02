const express = require("express");

console.log("BODY FAT ROUTES LOADED");

const router = express.Router();

const {
    calculateBodyFat
} = require("../controllers/bodyFatController");

console.log("calculateBodyFat =", calculateBodyFat);

router.post(
    "/calculate",
    calculateBodyFat
);

module.exports = router;