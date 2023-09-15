const express = require("express");

const router = express.Router();
const controller = require("../controllers/nameController");

// router.get("/", controller.getUsers);
// router.post("/", controller.createUser);
router
  .get("/all", controller.getNames)
  .get("/:id", controller.getName)
  .post("/", controller.addName)
  .put("/:id", controller.updateName)
  .delete("/:id", controller.deleteName);

module.exports = router;
