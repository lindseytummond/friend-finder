// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

    //retrieves (gets) data on friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

    //adds (posts) friend entry
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table

    // req.body is available since we're using the body parsing middleware
    var userInput = req.body
    var userAnswers = userInput.scores

    //find match
    var matchName = ''
    var matchImage = ''
    var totalDifference = 1000

    //loop thru friends list
    for (let i = 0; i < friends.length; i++) {
      //find differences
      const difference = 0
      for (let j = 0; j < userAnswers.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userResponses[j]);
      } 

      //find match based on lowest difference
        if (difference < totalDifference){
          totalDifference = difference
          matchName = friends[i].name
          matchImage = friends[i].photo
        }

        //push new user
        friends.push(userInput)
        res.json({ok: true})
    }
    
    //push new user
    friends.push(userInput)
    res.json({ok: true})

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friends.length = 0;

  //   res.json({ ok: true });
  // });
};
