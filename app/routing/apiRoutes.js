// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data on possible friends)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a new friend... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  app.post('/api/friends', function(req, res) {
    var userData = req.body
    // console.log('userScores = ' + JSON.stringify(userData));

// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.
// ------------------------------------------------------------------------------
    var userScores = userData.scores
    var matchName = ''
    var matchImage = ''
    var comparison = 1000
// loop through all friends
    for (var i = 0; i < friends.length; i++) {
      var difference = 0
// loop through all scores and set var difference = absolute val of friends.scores-userScores
      for (var j = 0; j < userScores.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userScores[j]);
      }
      // console.log('difference = ' + difference)
// set lowest difference to comparison, store friend name and photo
      if (difference < comparison) {
        // console.log('Closest match found = ' + difference);
        // console.log('Friend name = ' + friends[i].name);
        // console.log('Friend image = ' + friends[i].photo);
        comparison = difference
        matchName = friends[i].name
        matchImage = friends[i].photo
      }
    }
// Add new user
    friends.push(userData)
// Send appropriate response
    res.json({name: matchName, photo: matchImage})
  });
};