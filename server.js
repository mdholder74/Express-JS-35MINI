// SETUP npm init -y, npm install express, npm install nodemon --save-dev if not globally installed
// Require express
// Create an instance of express with the express.Router() method
const express = require('express');
const app = express();

// This serves static files so that they can be accessed by the client.
// Static files are files that are not processed by the server, such as images, CSS, and JavaScript files.
// Since the server does not process these files, they can be served directly to the client without any additional processing.
app.use(express.static('public'));

// SETUP VIEW ENGINE EJS
// This code configures your Express application to use EJS (Embedded JavaScript) a library as the template engine for rendering dynamic views (HTML pages).
// This means that when you call res.render('file.ejs'), Express will look for an EJS file named file.ejs in your views director/folder by default.
// Epress will use EJS to process the file. Next it passes the data ({ title: 'Welcome to the Home Page' }) into the template, so you can use it in your HTML document: <title><%= title %></title>.
// Result: When you visit /, the server responds with a rendered HTML page showing "Welcome to EJS.
app.set('view engine', 'ejs');

//GET DEFUALT/INDEX ROUTE
// This is a GET route that sends a response to the client. The client is the browser.
// Format for route creation app.method('route path/URL path', /handler/callback)
// app is the instance of express, method is the HTTP request method, route path is the URL path, and handler is the function that is called when the route is matched.
// logger is a middleware function that logs the URL of the request to the console.
// app.get('/', logger, (req, res) => {
//     res.render('index', { title: 'Welcome to EJS' });
// });

// IMPORT ROUTES
// Imports the router module from the users.js file
// The router module typically contains route definitions for handling specific paths and HTTP methods (e.g., GET, POST)
// app.use() is MIDDLEWARE it mounts the userRouter module at the /users path. This means that any path that starts with userRouter will be prefixed with /users. 
const userRouter = require('./routes/users');
app.use('/users', userRouter);

// function logger consoles the URL of the request to the console
// next() is a function that calls the next middleware function in the stack. If there are no more middleware functions in the stack, it calls the route handler.
// function logger(req, res, next) {
//     console.log(req.originalUrl);
//     next();
// }


// This means the server is running on port 3000
app.listen(4000)