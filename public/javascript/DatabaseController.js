function Database(){
	this.query = function(query,cb,errorhandler,alwayshandler,parameters){
		$.ajax({
			url: '/database',
			type: 'POST',
			data: {query: query}
		})
		.done(function(data) {
			if(cb != undefined && parameters == undefined){
				cb(data);
			} else {
				cb(data,parameters);
			}
		})
		.fail(function() {
			console.log("qeury error");
			if(errorhandler!==undefined){
				errorhandler();
			}
		})
		.always(function() {
			if(alwayshandler!==undefined){
				alwayshandler();
			}
		});	
	};	
}
var database = new Database();
