// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friends.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      name: "Homer Simpson",
      photo: "https://imgur.com/a/1rzqB6p",
      scores: [5,5,5,5,3,4,3,5,5,5],
      
    },
    {
        name: "Marge Simpson",
        photo: "https://imgur.com/a29kEUM",
        scores: [2,3,1,5,5,3,5,3,2,5],
        
      },
      {
        name: "Bart Simpson",
        photo: "https://imgur.com/xHUbuVh",
        scores: [1,4,5,3,3,4,3,5,2,3],
        
      },
      {
        name: "Lisa Simpson",
        photo: "https://imgur.com/UX2HrBb",
        scores: [1,2,3,5,3,3,5,3,2,5],
        
      },
      {
        name: "Maggie Simpson",
        photo: "https://imgur.com/A6PCSxL",
        scores: [3,3,2,4,2,3,5,3,3,3],
        
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;