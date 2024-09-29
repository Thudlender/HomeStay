const homestayController = require("../controllers/homestay.contrsollers");
const express = require("express")
const router = express.Router();

//create a new financial
router.post("/post", homestayController.create);

//Retrieve all financial records
router.get("/", homestayController.findAll);

//Retrieve a financial record with id
//router.get("/:id", financialController.findOne);

//Retrieve all financial records By UserId
router.get("/user/:userId", homestayController.findAllByUserId);

//Update a financial record with id
router.put("/:id", homestayController.update);

//Delete a financial record with id
router.delete("/:id", homestayController.delete);

module.exports = router;