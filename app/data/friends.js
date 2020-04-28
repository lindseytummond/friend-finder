// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friends.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      name: "Homer Simpson",
      photo: "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif",
      scores: [1,3,1,5,1,2,3,5,3,5],
      
    },
    {
        name: "Marge Simpson",
        photo: "https://media.giphy.com/media/11mTYesz11OGxW/giphy.gif",
        scores: [2,3,1,5,5,3,5,3,5,5],
        
      },
      {
        name: "Bart Simpson",
        photo: "https://media.giphy.com/media/xT5LMzWVNsfgu6srOU/giphy.gif",
        scores: [4,5,5,1,1,3,1,1,2,1],
        
      },
      {
        name: "Lisa Simpson",
        photo: "https://media.giphy.com/media/l2Je53EP800isL9fO/giphy.gif",
        scores: [5,5,5,3,5,3,5,5,5,5],
        
      },
      {
        name: "Maggie Simpson",
        photo: "https://media.giphy.com/media/s6EYTqTRqujIY/giphy.gif",
        scores: [1,1,1,1,1,3,1,1,1,1],
        
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;