let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
//connect to our user model
let User = require("../model/users");
let userController = require("../controllers/user");
//GET ROUTE for the user list page - READ OPERATION
router.get("/", userController.displayUserList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get("/add", userController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post("/add", userController.processAddPage);

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get("/edit/:id", userController.displayEditPage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post("/edit/:id", userController.processEditPage);
/*GET to perform Deletion - DELETE operation*/
router.get("/delete/:id", userController.performDelete);
module.exports = router;
