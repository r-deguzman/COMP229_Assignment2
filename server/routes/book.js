let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our book model
let Book = require('../model/books');
let bookController = require('../controllers/book');
//GET ROUTE for the book list page - READ OPERATION
router.get('/',bookController.displayBookList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',bookController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',bookController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',bookController.displayEditPage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',bookController.processEditPage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',bookController.performDelete);
module.exports = router;