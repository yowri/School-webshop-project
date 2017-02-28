$(function(){
	loadContent();
});

var currentShoppingCartID = null;

function loadContent()
{
	updateTotalPrice();
	ToMijnGegevens();
}

function updateTotalPrice()
{
	$("#totaalArtikelPrijs").text(getTotalPrice());
	$("#totaalPrijs").text(getTotalPrice());
}
function getTotalPrice(){
	var totalPrice = 0;
	
	for(var i=0;i < shoppingCartData.length; i++)
	{
		 return totalPrice += shoppingCartData[i].Price * shoppingCartData[i].Amount;
	}
}
function ToMijnGegevens(){	
	$("#mijngegevens").addClass("colorWhite");

	$("#MijnGegevensItem").css("display","initial");
	$("#BetalenItem").css("display","none");
	$("#BevestigenItem").css("display","none");

	// remove from others
	$("#betalen").removeClass("colorWhite");
	$("#Bevestigen").removeClass("colorWhite");

	submitDataToDatabase();
	changeButtonActions("Betalen",betalen,null);
}

function submitDataToDatabase(){
	database.query("INSERT INTO `shoppingcart`(`Price`) VALUES ("+getTotalPrice()+")",function(result){
		database.query('SELECT ID from shoppingcart order by ID DESC limit 1',function(result){
			currentShoppingCartID = result[0].ID;
		});
	});
}
function submitDataOrderToDatabase(){
	database.query("INSERT INTO `order`(`CustomerID`,`ShoppingCartID`) VALUES (50,"+currentShoppingCartID+")",function(result){

	});
}

function betalen(){
	ToBetalen();
}
function Bevestigen(){
	ToBevestigen();
}

function Homepagina(){
	window.location = "";
}


function changeButtonActions(buttonname,buttoncallback, parameters){
	$("#NextButton").unbind("click");
	$("#NextButton").text(buttonname);
	$("#NextButton").click({"callback":buttoncallback,"parameters":parameters},function(event){
		event.data.callback(event.data.parameters);
	});
}

function addProductsToDatabase(){
	for(var i = 0; i < shoppingCartData.length; i++){
			database.query('INSERT INTO `shoppingcartproduct`(`ShoppingCartID`, `ProductID`, `Quantity`) VALUES ('+currentShoppingCartID+','+shoppingCartData[i].ID+','+shoppingCartData[i].Amount+')',function(){

			});
	}
}

function ToBetalen(){
	$("#betalen").addClass("colorWhite");

	$("#mijngegevens").removeClass("colorWhite");
	$("#Bevestigen").removeClass("colorWhite");

	$("#NextButton").text("Bevestigen");

	$("#MijnGegevensItem").css("display","none");
	$("#BetalenItem").css("display","initial");
	$("#BevestigenItem").css("display","none");

	submitDataOrderToDatabase();
	addProductsToDatabase();
	changeButtonActions("Bevestigen",Bevestigen,null);
}

function ToBevestigen(){
	$("#Bevestigen").addClass("colorWhite");

	$("#mijngegevens").removeClass("colorWhite");
	$("#betalen").removeClass("colorWhite");

	$("#NextButton").text("Terug naar home pagina");

	$("#MijnGegevensItem").css("display","none");
	$("#BetalenItem").css("display","none");
	$("#BevestigenItem").css("display","initial");

	$.ajax({
		url: '/mail',
		type: 'POST'
	})
	.always(function(data) {
	
	});

	changeButtonActions("Terug naar home pagina",Homepagina,null);
}