function login(){
  $('#signUp').hide();
  $('#logIn').show();
  $('.outerdiv').html("<h4 class='loginlink'>Don't have an account?<a onclick='signup()'>Sign up</a></h4>");
  $('#mainimage').css({"margin":"0px 0px 0px 200px","float":"right"});
  $('.innerbox').css({"width":"50%","background-color": "white","margin":"120px 0px 0px 0px","border":"0","padding":"0px","border":"1px solid #e6e6e6"});
  $('input').css({"border":"1px solid #f2f2f2","width":"calc(100% - 80px)","padding":"10px","margin":"5px 30px 5px 30px","display":"block","border-radius":"2px","background-color": "#FDFDFD","color":"#000000","font-family":"'Helvetica Neue',Helvetica, Arial","font-weight":"normal","font-size":"14px"});

  $('.tag').css({"width":"35%","height":"57%","position": "absolute","left": "380px","top": "95px","z-index": "1000","background-color":"transparent","padding": "0px"});
}

function signup(){
  $('#logIn').hide();
  $('#signUp').show();
  $('.outerdiv').html("<h4 class='loginlink'>Have an account?<a onclick='login()'>Log in</a></h4>");
  $('#mainimage').css({"margin":"68px 0 68px 200px","float":"right"});
  $('.innerbox').css({"width":"50%","background-color": "white","margin":"30px 0px 0px 0px","border":"0","padding":"0px","border":"1px solid #e6e6e6"});

  $('.tag').css({"width":"35%","height":"57%","position": "absolute","left": "380px","top": "163px","z-index": "1000","background-color":"transparent","padding": "0px","color": "#FFFFFF","font-weight": "bold"});

}

$(".tag > div:gt(0)").hide();

setInterval(function() { 
  $('.tag > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('.tag');
},  3000);
