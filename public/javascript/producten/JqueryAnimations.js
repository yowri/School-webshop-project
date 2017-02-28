function JQinit(){
  backBtnHover();
}
function backBtnHover(){
      $('.back , .back-arrow').hover(function(){
      $('.back').css('color','#0091ea !important');
      $('.back-arrow').css('color','#0091ea !important');
    },function(){
      $('.back').css('color',' #039be5 !important');
      $('.back-arrow').css('color','#039be5 !important');
    });
}

