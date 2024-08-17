require("dotenv").config();
const express = require("express");
const sequelize = require("./config/sequelize");
const Card = require("./models/Card");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());
const helpcenterRoute = require("./controllers/helpcenterRoute");

app.use("/api/helpcenter", helpcenterRoute);

const port = 3001;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({});
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
