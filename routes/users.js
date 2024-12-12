//SETUP 
// Require express
// Create an instance of express with the express.Router() method
// router is considered a mini app that only handles routes
const express = require('express');
const router = express.Router();

// GET USERS ROUTE
router.get('/', (req, res) => {

})

//GET NEW USERS ROUTE
router.get('/new', (req, res) => {

})

// EXPORT ROUTER
// This exports the router module so it can be used in other files
module.exports = router;