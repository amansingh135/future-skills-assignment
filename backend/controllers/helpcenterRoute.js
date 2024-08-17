const express = require("express");
const Card = require("../models/Card");
const router = express.Router();
const { Sequelize } = require("sequelize");

router.post("/create-card", async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.title == null || req.body.description == null) {
      return res.status(400).json({
        status: false,
        message: "Title and description both are required !!",
      });
    }
    const card = await Card.create({
      title: req.body.title,
      description: req.body.description,
    });

    await card.save();

    return res.status(201).json({
      status: true,
      message: "card created successfully",
      data: card,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error while creating card",
    });
  }
});

router.get("/get-all-cards", async (req, res) => {
  try {
    const cards = await Card.findAll();

    if (!cards) {
      return res.status(404).json({
        status: false,
        message: "No cards Found!!",
        data: [],
      });
    }

    return res.status(200).json({
      status: true,
      message: "cards retrieved successfully",
      data: cards,
    });
  } catch (error) {
    return res.status(500).json({
      status: true,
      message: "Error while retrieving cards",
    });
  }
});

router.get("/get-card-by-title", async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: {
        title: {
          [Sequelize.Op.like]: `%${req.query.title}%`,
        },
      },
    });
    if (!cards) {
      return res.status(404).json({
        status: false,
        message: "No card found with given title found!!",
      });
    }
    return res.status(200).json({
      status: true,
      message: "cards retrieved successfully",
      data: cards,
    });
  } catch (error) {
    return res.status(500).json({
      status: true,
      message: "Error while retrieving card",
    });
  }
});
module.exports = router;
