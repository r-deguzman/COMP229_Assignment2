let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let User = require("../model/users");
module.exports.displayUserList = (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(UserList);
      res.render("user/list", { title: "users", UserList: userList });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("user/add", { title: "Add User" });
};

module.exports.processAddPage = (req, res, next) => {
  let newUser = User({
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });
  User.create(newUser, (err, User) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/userList");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, userToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("user/edit", { title: "Edit User", user: userToEdit });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  console.log(req.body);
  let updatedUser = User({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });
  User.updateOne({ _id: id }, updatedUser, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/userList");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  User.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/userList");
    }
  });
};
