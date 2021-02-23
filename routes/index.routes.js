const express = require("express");
const { students, pets } = require("../data");

const router = express.Router();

router.get("/home", (request, response) => {
  response.render("index", { students: students });
});

router.get("/cat", (request, response) => {
  response.render("cat-page");
});

router.get("/pet-gallery", (request, response) => {
  response.render("pet-gallery", { pets });
});

module.exports = router;
