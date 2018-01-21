console.log("hii");
$.ajax({
  type:"GET",
  url:"movies/all",
  // url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
    console.log("data from success:::",response);

    var data = formObject(response.data);
    constructDOM(data);
    // formObject(response);
  },
  error:function(err){
    console.log("error in get method ",err);
  }
});
function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;
  for(var i=0;i<length;i++){
    var movie=response[i];
    // console.log("Movie",movie);
    // console.log("Language",movie.language);
    var index=flags.indexOf(movie.language);
    if(index>=0){
    categoryObject[index].movies.push(movie);
    continue;
    }else{
    flags.push(movie.language);
    }
    var objectSchema={
      "category":movie.language,
      "movies":[]
    }
    objectSchema.movies.push(movie);
    categoryObject.push(objectSchema);
    console.log("objectschema",objectSchema);
    console.log("categoryObject",categoryObject);
  }
    console.log(flags);
    return categoryObject;
  // console.log("formObject response",response);
}
  function constructDOM(data){
    var categoryContent=[];
    for(i=0;i<data.length;i++){
      var objectSchema=data[i];
      console.log("constructorDOM",objectSchema);
      var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
      categoryContent.push(categoryTitle);
    }
    // for(i=0;i<data.length;i++){
    //   var categoryTitle=$('<div class="pic">'+objectSchema.category+'</h3>');
    // }
    $('section.content').html(categoryContent);
  }
