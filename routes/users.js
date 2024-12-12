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

//POST USERS ROUTE
// This route is used to create a new user
router.post('/', (req, res) => {
    res.send('Create User')

})

// This is chaining the routes together by defining the route and the method in the same line and one time
//GET USERS ID ROUTE
// This route is used to get a specific user by ID
//UPDATE USERS ID ROUTE
// This route is used to get a specific user by ID
//DELETE USERS ID ROUTE
// This route is used to get a specific user by ID
router.route('/:id')
    .get((req, res) => {
        res.send(`Get User by ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User by ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User by ID ${req.params.id}`)
    })

// //GET USERS ID ROUTE
// // This route is used to get a specific user by ID
// router.get('/:id', (req, res) => {
//     res.send(`Get User by ID ${req.params.id}`)

// })
// //UPDATE USERS ID ROUTE
// // This route is used to get a specific user by ID
// router.put('/:id', (req, res) => {
//     res.send('Update User by ID')

// })
// //DELETE USERS ID ROUTE
// // This route is used to get a specific user by ID
// router.delete('/:id', (req, res) => {
//     res.send(`Delete User by ID ${req.params.id}`)

// })

// EXPORT ROUTER
// This exports the router module so it can be used in other files
module.exports = router;