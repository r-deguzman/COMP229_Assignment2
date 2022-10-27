let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

// create a reference to the model
let Contact = require("../models/contact");

module.exports.displayContactList = (req, res, next) => {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(ContactList);

      res.render("contact/list", {
        title: "Business Contact List",
        ContactList: contactList,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  }).sort({name: 1});
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("contact/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.displayUpdatePage = (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id, (err, contactToUpdate) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the update view
      res.render("contact/update", {
        title: "Update Contact",
        contact: contactToUpdate,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processUpdatePage = (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    _id: id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};
