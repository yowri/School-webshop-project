//Webshop initialization
$(function(){
    $(".button-collapse").sideNav();
    $('.slider').slider();
    $(".logoff").click(function(){
          accountController.logoff();
    });
});