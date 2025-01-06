//SETUP 
// Require express
// Create an instance of express with the express.Router() method
// router is considered a mini app that only handles routes
const express = require('express');
const router = express.Router();

// GET USERS ROUTE
router.get('/', (req, res) => {
    console.log("GET USERS")
    res.send('Get Users')

})

//GET NEW USERS ROUTE
// This sets up a route that listens for GET requests to the /new endpoint.
// The callback function is executed whenever a GET request is made to the path /new.
// res.render('users/new') This tells Express to render a template named new.ejs located inside the users folder.
// When a GET request is made to /new, the server responds by rendering the new.ejs view.
router.get('/new', (req, res) => {
    res.render('users/new')

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
// router.route('/:id')
//     .get((req, res) => {
//         res.send(`Get User by ID ${req.params.id}`)
//     })
//     .put((req, res) => {
//         res.send(`Update User by ID ${req.params.id}`)
//     })
//     .delete((req, res) => {
//         res.send(`Delete User by ID ${req.params.id}`)
//     })

// //GET USERS ID ROUTE
// // This route is used to get a specific user by ID
router.get('/:id', (req, res) => {
    res.send(`Get User by ID ${req.params.id}`)

})
// //UPDATE USERS ID ROUTE
// // This route is used to get a specific user by ID
router.put('/:id', (req, res) => {
    res.send('Update User by ID')

})
// //DELETE USERS ID ROUTE
// This route is used to get a specific user by ID
router.delete('/:id', (req, res) => {
    res.send(`Delete User by ID ${req.params.id}`)

})


// Define an array of user objects, where each object represents a user with a "name" property.
// This array acts as a simple in-memory list of users for demonstration purposes.
const users = [{ name: 'John' }, { name: 'Sara' }, { name: 'Jane' }];

// Middleware for handling the "id" route parameter in any route that includes ":id".
router.param('id', (req, res, next, id) => {
    // Retrieve the user from the "users" array using the "id" parameter as the index.
    // Attach the retrieved user object to the "req.user" property, making it accessible in later route handlers.
    req.user = users[id];

    // Call "next()" to pass control to the next middleware or route handler.
    // If "next()" is not called, the request will hang and not proceed.
    next();
});


// EXPORT ROUTER
// This exports the router module so it can be used in other files
module.exports = router;