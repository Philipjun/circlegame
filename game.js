$(document).ready(function(){
  var circles =[];
    for(var i=0, i< 10, i++){
      
      
    }



  $('circle').animate({
    top: "+=300px",
    left: "+=300px",

  }, {
    complete: function() {
      alert("I moved!");
    }
  });



});

