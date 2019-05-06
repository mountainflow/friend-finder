const express = require('express');
const app = express();
// process.env.PORT lets the port be set by Heroku=========
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Points the server to the api and html routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening====================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});