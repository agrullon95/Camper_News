$(document).ready(function(){
  new WOW().init();
  var url = 'http://www.freecodecamp.com/news/hot';
  var upvotes;
  var profilePic;
  var articleTitle;
  var newDate;
  var date;
  var username;
  var link;
  $.getJSON(url, function(json){
    
    for(var x = 0; x < json.length; x++){
      upvotes = json[x].rank;
      profilePic = json[x].author.picture;
      articleTitle = json[x].headline;
      newDate = new Date(json[x].timePosted);
      date = newDate.toDateString();
      username = json[x].author.username;
      link = json[x].link;
      
      $('.row').append("<div id='articles' class='col-sm-4 wow fadeInUp'><a href='" + link + "'><div class='image' style='background-image:url(\""+ profilePic + "\");'></div></a><a href='" + link + "'><h2>" + articleTitle + "</h2></a><hr class='text-center'/><span class='upvoteHeart'><i class='glyphicon glyphicon-heart'></i><span class='upvotes'>" + upvotes + "</span></span><p class='date'>Posted on: " + date + "</p><p class='author'>By: <a href='http://www.freecodecamp.com/" + username + "' alt='Profile Picture'>" + username + "</p></a></div>");
    }
  });
});