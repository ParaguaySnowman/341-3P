//Node Modules
const express = require('express');

//Controllers
const contactsController = require('../controllers/contacts');

//Router
const router = express.Router();

router
    .route('/')
    .get(
        contactsController.getAll,
        contactsController.createContact
    )

router
    .route('/:id')
    .get( 
        contactsController.getSingle,
        contactsController.updateContact,
        contactsController.deleteContact
    )

module.exports = router;