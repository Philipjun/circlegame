$(document).ready(function(){
  var circles =[];
    for(var i=0, i< 10, i++){
      var circle = new Circle();
      circles.push(circle);
      circles[i].render();

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

function Circle() {
  this.x = Math.random() * 450;
  this.y= Math.random() * 450;
  this.diameter= 30 + Math.random() * 50;
  this.speed= 500 + Math.random() * 1500;

  this.render = function(){
    this.$me = $('div class="circle"></div>').css('left, this.x')
    .css('top', this.y)
    .css('width', this.diameter)
    .css('height', this.diameter);

    $('game').append(this.$me);
  
  };

  this.move = function(){
    this.$me.animate({
      top: "+=300px",
    left: "+=300px",

    }, {
      complete: function(){
        this.move();
      }
    });
  };

}
