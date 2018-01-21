var movies=require('./movieData');
var dbService=require('../services/dbService');
exports.getAllMovies=function (req,res, next) {
  console.log("dbservice",dbService);
  var db=dbService.database;
  var moviesCollection=db.collection("movies");
  moviesCollection.find().toArray().then(function(result){
    var outputJSON={
      "dbservices":true,
      "data":result
    }
    // console.log("Result",result);
    return res.json(outputJSON);
  });
  // return res.json(movies);
};
exports.addNewMovie=function(req,res,next){
  var db=dbService.database;
   movies=req.body;
   moviesCollection=db.collection("movies");
   moviesCollection.insert(movies).then(function(save_data){
     return res.json({
       "isSuccess":true
     });
   });
}
