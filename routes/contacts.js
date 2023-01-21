const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// GET all Contacts
router.get('/', contactsController.getAllContacts);

// Find contact by ID
router.get('/:id', contactsController.findContact);

module.exports = router;