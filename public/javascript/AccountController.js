
const KEY_USER = "user";
const KEY_CUSTOMER = "customer";
const KEY_PERSON = "person";

function AccountController(){
	this.isUserLoggedIn = function(){
		let user = sessionStorage.getItem(KEY_USER);
		if(user!=null){
			return true;
		} 
		return false;
	};
	this.logoff = function(){
		sessionStorage.removeItem(KEY_USER);
		sessionStorage.removeItem(KEY_CUSTOMER);
		sessionStorage.removeItem(KEY_PERSON);

		navigateTo("home.html");
		$(".username").text("Gast");
		$(".logoff").hide();
	};
	this.login = function(wrapperEmail,wrapperPassword){
		let password = "'"+wrapperPassword +"'";
		let email = "'"+wrapperEmail +"'";

		var query = "select * from user where password = "+password+" and customerId = (select id from customer where email = "+email+")";

		database.query(query,function(result){
			if($.isEmptyObject(result)){
				Materialize.toast('Foute gebruikersnaam en of wachtwoord!', 4000);
			}else{
				var user = result[0];
				user.Password = "heel erg geheim";
				sessionStorage.setItem(KEY_USER,JSON.stringify(user));
				console.log(user);
				database.query("select * from customer where id = "+user.CustomerID,function(data){
					var customer = data[0];
					console.log(customer);
					sessionStorage.setItem(KEY_CUSTOMER,JSON.stringify(customer));
					database.query("select * from person where id = "+customer.PersonID,function(personData){
						console.log(personData[0]);
						var person = personData[0];
						sessionStorage.setItem(KEY_PERSON,JSON.stringify(person));
						navigateTo("account.html");
					});

				},function(errornested){
					Materialize.toast('Er heeft zich een fout voorgedaan, probeert u het later nog eens!', 4000);
				});
			}
		},function(errorresult){
			console.log(errorresult);
			Materialize.toast('Er heeft zich een fout voorgedaan, probeert u het later nog eens!', 4000);
		});
	};
	this.getUser = function(){
		return JSON.parse(sessionStorage.getItem(KEY_USER));
	}
	this.getCustomer = function(){
		return customer = JSON.parse(sessionStorage.getItem(KEY_CUSTOMER))
	}
	this.getPerson = function(){
		return JSON.parse(sessionStorage.getItem(KEY_PERSON));
	}
	this.updateSite = function(){
		if(this.isUserLoggedIn()){
			$(".logoff").show();

			let name = this.getPerson().Firstname;
			$(".username").text(this.getPerson().Firstname);
		} else {
			$(".logoff").hide();
			$(".username").text("Gast");
		}
	}
}
var accountController = new AccountController();