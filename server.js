const express = require('express');
const path = require('path');
// Sets up the Express App=================================
const app = express();
// process.env.PORT lets the port be set by Heroku=========
var PORT = process.env.PORT || 3000;


//=========================================================
// Just testing stuff======================================

app.get('/:id', function (req, res) {
    res.send(req.params.id);
});


// End Just testing stuff======================================
//=========================================================


// Starts the server to begin listening====================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});