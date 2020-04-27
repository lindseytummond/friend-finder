// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friends.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      name: "Homer Simpson",
      photo: "http://pngimg.com/uploads/simpsons/simpsons_PNG80.png",
      scores: [5,5,5,5,5,5,5,5,5,5],
      
    },
    {
        name: "Marge Simpson",
        photo: "http://pngimg.com/uploads/simpsons/simpsons_PNG56.png",
        scores: [4,4,4,4,4,4,4,4,4,4],
        
      },
      {
        name: "Bart Simpson",
        photo: "http://pngimg.com/uploads/simpsons/simpsons_PNG78.png",
        scores: [3,3,3,3,3,3,3,3,3,3],
        
      },
      {
        name: "Lisa Simpson",
        photo: "http://pngimg.com/uploads/simpsons/simpsons_PNG64.png",
        scores: [2,2,2,2,2,2,2,2,2,2],
        
      },
      {
        name: "Maggie Simpson",
        photo: "http://pngimg.com/uploads/simpsons/simpsons_PNG55.png",
        scores: [1,1,1,1,1,1,1,1,1,1],
        
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;