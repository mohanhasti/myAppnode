var MongoClient = require("mongodb").MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://mokh:mokh123@ds161042.mlab.com:61042/projectormyapp").then(function(client){
    console.log("connected to mongodb");
    exports.database=client.db("projectormyapp");
  });
}
