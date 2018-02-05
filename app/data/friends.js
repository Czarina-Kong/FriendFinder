// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================

var friends = [
{
  "name":"Chris Pratt",
  "photo":"https://media.giphy.com/media/Z85WGWaAhSS3e/giphy.gif",
  "scores":[
      4, 2, 5, 1, 5, 1, 2, 1, 2, 5
    ]
},
{
  "name":"Tom Hardy",
  "photo":"https://media.giphy.com/media/AulPWu750BnYA/giphy.gif",
  "scores":[
      5, 4, 4, 4, 1, 3, 5, 3, 1, 1
    ]
},
{
  "name":"Lee Jong-suk",
  "photo":"https://media.giphy.com/media/WW0HCQm8mOAcU/giphy.gif",
  "scores":[
      2, 4, 3, 4, 3, 4, 1, 4, 4, 2
    ]
},
{
  "name":"Idris Elba",
  "photo":"https://media.giphy.com/media/FyKfseNB6a8tG/giphy.gif",
  "scores":[
      3, 3, 3, 3, 3, 1, 2, 4, 2, 3
    ]
},
{
  "name":"Gaston",
  "photo":"https://media.giphy.com/media/pF8sfgvZvDKPm/giphy.gif",
  "scores":[
      1, 5, 5, 5, 1, 5, 3, 5, 3, 5
    ]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;