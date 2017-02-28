var productListItemPartial;

$(function(){
	loadContent();
});

function loadContent(){
	$.get( "/pages/ProductListItemPartial.html", function( data ) {
	  productListItemPartial = data;
	  	init();
	});
}

function init(){
	loadVisualProducts(shoppingCartData);
		totalUpdate();
}

function totalUpdate(){
	var totalPrice = 0;
	for(var i = 0; i < shoppingCartData.length;i++){
		totalPrice += shoppingCartData[i].Price * shoppingCartData[i].Amount;
	}
	$(".winkelwagen-totaal #totaalPrijsArtikelen").text(totalPrice);
	$(".winkelwagen-totaal #totaalprijs").text(totalPrice);
}

function loadVisualProducts(data){
	$(".winkelwagen-product").empty();
	for(var i = 0; i < data.length;i++){
		var item = $.parseHTML(productListItemPartial);
		// set image
		$(item).find(".ProductImage").css("background-image", "url("+data[i].Image+")");  

		// set exra
		$(item).find(".productTitle").text(data[i].Name);
		$(item).find(".productDes").text(data[i].Description);

		// set price
		var price = data[i].Amount * data[i].Price;

		$(item).find(".finalPrice").text("€"+price);

		$(item).find(".totalAmounth").text(data[i].Amount);

		// add click listeners
		$(item).find(".addProductItem").click({obj:data[i]},function(event){
			event.data.obj.Amount += 1;
			console.log(shoppingCartData);
			updateShoppingCartItem(event.data.obj);
				// reload
			loadVisualProducts(shoppingCartData);
				totalUpdate();
		});

		$(item).find(".removeProductItem").click({obj:data[i]},function(event){
			if(event.data.obj.Amount > 1){
				event.data.obj.Amount -= 1;
				updateShoppingCartItem(event.data.obj);
				// reload
				loadVisualProducts(shoppingCartData);
				totalUpdate();
			}
		});

		$(item).find(".RemoveProduct").click({obj:data[i]},function(event){
			removeFromShoppingCart(event.data.obj);
			loadVisualProducts(shoppingCartData);
			totalUpdate();
		});

		$(".winkelwagen-product").append(item);
	}
}