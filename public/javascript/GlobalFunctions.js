function makeEuro(result){
     for(var i = 0; i < result.length; i ++){
      var oldPrice = result[i].Price;
      result[i].Price = '\u20AC '+ oldPrice.toFixed(2);
    }
}
function makeNumber(price){
	  checkPrice = typeof price;
	  if(checkPrice == "string"){
	  	var oldPrice = price;
      	var res = oldPrice.split('\u20AC ');
      	return parseFloat(res[1]);
	  }
      return price
}
function HighlightStore(){
    $("#wg").addClass('active'); 
    setTimeout(function() { 
      $("#wg").removeClass('active'); 
    }, 400);
}
function productClick(element,products){
  $(element).find('.checkout-btn').click({"product":products},function(event){
    HighlightStore();
    addProductToShoppingCard(event.data.product);
    $(element).unbind();
  });
  $(element).click({"product":products},function(event){
      $('.product-list').empty();
      $('.product-list').append(getProductTemplate(event.data.product));
      $('.checkout-btn').click(function(){
          addProductToShoppingCard(event.data.product);
      });
  });
}