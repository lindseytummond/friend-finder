// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
  {
    id: 123,
    name: "Lindsey",
    email: "lindsey@example.com",
    phone: 123-456-7890,
  },
  {
    id: 456,
    name: "Sean",
    email: "sean@example.com",
    phone: 11-456-7890,
  },
  {
    id: 789,
    name: "Travis",
    email: "lindseytummond@gmail.com",
    phone: 123-456-7890,
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all reservations
// app.get("/restaurant/reservations", function(req, res) {
//   return res.json(reservations);
// });

// // Displays a single character, or returns false
// app.get("/restaurant/reservations/:reservations", function(req, res) {
//   var chosen = req.params.reservations;

//   console.log(chosen);

//   for (var i = 0; i < reservations.length; i++) {
//     if (chosen === reservations[i].routeName) {
//       return res.json(reservations[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
// app.post("/restauarant/reservations/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newreservation = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newreservation);

//   characters.push(newreservation);

//   res.json(newreservation);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on localhost:"+ PORT);
});