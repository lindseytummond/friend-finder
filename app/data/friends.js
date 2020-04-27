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
      scores: [5,5,5,5,5,5,5,5,5,5],
      
    },
    {
        name: "Marge Simpson",
        photo: "https://imgur.com/a29kEUM",
        scores: [4,4,4,4,4,4,4,4,4,4],
        
      },
      {
        name: "Bart Simpson",
        photo: "https://imgur.com/xHUbuVh",
        scores: [3,3,3,3,3,3,3,3,3,3],
        
      },
      {
        name: "Lisa Simpson",
        photo: "https://imgur.com/UX2HrBb",
        scores: [2,2,2,2,2,2,2,2,2,2],
        
      },
      {
        name: "Maggie Simpson",
        photo: "http://pngimg.com/uploads/simpsons/simpsons_PNG96.png",
        scores: [1,1,1,1,1,1,1,1,1,1],
        
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;