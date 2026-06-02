const authRoutes =
require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

console.log("LOADING BMI ROUTES NOW");

const bmiRoutes =
require("./routes/bmiRoutes");

console.log("BMI ROUTES OBJECT =", bmiRoutes);


console.log("LOADING BODY FAT ROUTES NOW");

const bodyFatRoutes =
require("./routes/bodyFatRoutes");

console.log("BODY FAT ROUTES OBJECT =", bodyFatRoutes);

const calorieRoutes =
require("./routes/calorieRoutes");

const historyRoutes =
require("./routes/historyRoutes");

const connectDB = require("./config/db");

dotenv.config();

console.log("PORT =", process.env.PORT);
console.log("MONGO_URI =", process.env.MONGO_URI);

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Health Backend Running");
});

const PORT = process.env.PORT || 5000;

app.use(
"/api/auth",
authRoutes
);
app.post("/debug", (req, res) => {
  res.json({
    message: "Debug route working"
  });
});

app.use(
"/api/bmi",
bmiRoutes
);

app.use(
"/api/bodyfat",
bodyFatRoutes
);

app.use(
"/api/calories",
calorieRoutes
);

app.use(
"/api/results",
historyRoutes
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});