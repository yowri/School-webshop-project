function navigateTo(page){
	$.get("/pages/"+page, function(data) {
		$("#content").html(data);
		if(page == 'home.html'){
			$("#slider").show();
		} else {
			$("#slider").hide();
		}
		$('.button-collapse').sideNav('hide');
		accountController.updateSite();
	});
}