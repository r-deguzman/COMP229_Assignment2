/*
Student's Name: Ruth Jocelyn De Guzman
Student ID: 301224922
Date: October 23, 2022
*/

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

router.get("/Services", function (req, res, next) {
  res.render("Services", { title: "Services" });
});

router.get("/Contact", function (req, res, next) {
  res.render("Contact", { title: "Contact" });
});
module.exports = router;
