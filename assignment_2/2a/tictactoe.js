var round="x";
  var player1=[];
  var player2=[];
    var w1 = [2,4,6];
    var w2 = [2,5,8];
    var w3 = [1,4,7];
    var w4 = [6,7,8];
    var w5 = [3,4,5];
    var w6 = [0,1,2];
    var w7 = [0,3,6];
    var w8 = [0,4,8];
    var wins = [w1, w2, w3, w4, w5, w6, w7, w8];

    var beginGame=function(){
      player1=[];
      player2=[];
      $(".cell").each(function(){
        $(this).text("");
      });
      wins=[w1, w2, w3, w4, w5, w6, w7, w8];
      round="x";
    }

    $(".clickable").click(function(){
      var celltext=$(this).text();
      if(celltext==""){
        if(round=="x"){
          $(this).text("x");
          player1.push($(this).data("val"));
          round="o";
        }
        else {
          $(this).text("o");
          player2.push($(this).data("val"));
          round="x";
        }

        $.each(wins, function(i,v){
          if(player1.length>=3){
            var flag = true;

            $.each(v,function(key,value){
              if($.inArray(value,player1)==-1){
                flag = false;
              }
        })

        if(flag == true){
          alert("You win!");
          return;
        }
      }

      if(player2.length>=3){
        var flag = 1;

        $.each(v,function(key,value){
          if($.inArray(value, player2)==-1){
            flag = 2;
          }
    })

    if(flag == 1){
      alert("You lose! :(");
      return;
    }
  }
});
};
});
$("#tictacreset").click(function(){
  beginGame();
});
