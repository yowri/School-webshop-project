var app =
    ng.core.Component({
      selector: 'webshop',
      templateUrl: '/views/main.html'
    })
    .Class({
      constructor: function() {
      	 //Mogelijkheden om app.functies toe te voegen en constante variable, ook is de constructor handig voor initial dingen
      	this.appName = "CowShop";
      	navigateTo("home.html");
      }
});