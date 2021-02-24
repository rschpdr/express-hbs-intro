const express = require("express");
const { students, pets } = require("../data");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("index", { students: students });
});

router.get("/cat", (request, response) => {
  response.render("cat-page");
});

router.get("/pet-gallery", (request, response) => {
  response.render("pet-gallery", { pets });
});

// Somente requisições do tipo POST que possuem o objeto body
router.get("/pet/search", (request, response) => {
  const filtered = pets.filter((pet) => {
    let searchMatched = false;

    if (request.query.searchTerm) {
      console.log(request.query.searchTerm);

      for (let key in pet) {
        if (key !== "picture") {
          if (
            typeof pet[key] === "string" &&
            pet[key]
              .toLowerCase()
              .includes(request.query.searchTerm.toLowerCase())
          ) {
            searchMatched = true;
          } else if (pet[key] == request.query.searchTerm) {
            searchMatched = true;
          }
        }
      }
    }

    return searchMatched;
  });

  response.render("pet-gallery", { pets: filtered });
});

router.get("/pet/:id", (request, response) => {
  const { id } = request.params;

  const foundPet = pets.find(function (petObj) {
    return petObj.id === Number(id);
  });

  response.render("pet-detail", foundPet);
});

module.exports = router;
