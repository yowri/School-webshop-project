/// <reference path="../lib/jquery.d.ts" />
/// <reference path="CMSui.ts"/>
/// <reference path="../../../node_modules/angular2/core.d.ts"/>

module Data {


	export class DataModal {
		// add Product functions
		public initAddProduct(): void {
			database.query("SELECT * FROM category", function(data) { // ignore error
				for (var i = 0; i < data.length; i++) {
					$("#BaseModal .modal-content #CategorySelect").append("<option value=" + data[i].ID + ">" + data[i].Name + "</option>");
				}
			});
		}

		public static categorysTemp;

		public static PTempName;
		public static PTempDes;
		public static PTempPrice;
		public static PTempCID;

		public submitAddProduct(): void {
			var file = document.getElementById("NewProductImage").files[0];// ignore error
			if(file != null){
				var ProductName = $("#BaseModal .modal-content #ProductName").val();
				var ProductDiscription = $("#BaseModal .modal-content #ProductDiscription").val();
				var ProductPrice = $("#BaseModal .modal-content #ProductPrice").val();
				var ProductCatagory = $("#BaseModal .modal-content #CategorySelect").val();

				if( ProductName != undefined && ProductName != ""){
					if (ProductDiscription != undefined && ProductDiscription != "") {
						if (ProductPrice != undefined && ProductPrice != "") {
							if (ProductCatagory != undefined && ProductCatagory != "") {
								// send product is valid

								var reader = new FileReader();
								Data.DataModal.PTempName = ProductName;
								Data.DataModal.PTempDes = ProductDiscription;
								Data.DataModal.PTempPrice = ProductPrice;
								Data.DataModal.PTempCID = ProductCatagory;

								reader.onload = function(event) {
									database.query("INSERT INTO `product`(`ID`, `Name`, `Description`, `Price`, `Amount`, `IsVisible`, `Image`, `categoryID`) VALUES ('','" + Data.DataModal.PTempName + "','" + Data.DataModal.PTempDes + "','" + Data.DataModal.PTempPrice + "','0','0','" + event.target.result + "','" + Data.DataModal.PTempCID + "')", function(data) { // ignore error
										Materialize.toast('Product successfully added', 1000); // ignore error
										// zero out last
										Data.DataModal.PTempName = null;
										Data.DataModal.PTempDes = null;
										Data.DataModal.PTempPrice = null;
										Data.DataModal.PTempCID = null;

										CMSui.CMSuiC.closeModal();
										CMSui.CMSuiC.loadProducts();
										});
								};

								reader.readAsDataURL(file);
							} else {
								Materialize.toast('Please enter a valid Product category', 1000); // ignore error
							}
						} else {
							Materialize.toast('Please enter a valid Product price', 1000); // ignore error
						}
					} else {
						Materialize.toast('Please enter a valid Product discription', 1000); // ignore error
					}
				} else {
					Materialize.toast('Please enter a valid Product name', 1000); // ignore error
				}
			} else {
				Materialize.toast('Please select a image', 1000); // ignore error
			}

			
		}

		// add catagory functions
		public initAddCategory(): void {

		}

		public initProductSettings(product):void{
			$("#BaseModal .modal-content #ProductName").val(product.Name);
			$("#BaseModal .modal-content #ProductDiscription").val(product.Description);
			$("#BaseModal .modal-content #ProductPrice").val(product.Price);

			database.query("SELECT * FROM category", function(data) { // ignore error
				for (var i = 0; i < data.length; i++) {
					if (data[i].ID == product.categoryID){
						$("#BaseModal .modal-content #CategorySelect").append("<option selected value=" + data[i].ID + ">" + data[i].Name + "</option>");
					} else {
						$("#BaseModal .modal-content #CategorySelect").append("<option value=" + data[i].ID + ">" + data[i].Name + "</option>");
					}
					
				}
			});
		}

		public submitProductSettings(product):void{
			//
			//if (file != null) {
			var ProductName = $("#BaseModal .modal-content #ProductName").val();
			var ProductDiscription = $("#BaseModal .modal-content #ProductDiscription").val();
			var ProductPrice = $("#BaseModal .modal-content #ProductPrice").val();
			var ProductCatagory = $("#BaseModal .modal-content #CategorySelect").val();
				if (ProductName != undefined && ProductName != "") {
					if (ProductDiscription != undefined && ProductDiscription != "") {
						if (ProductPrice != undefined && ProductPrice != "") {
							if (ProductCatagory != undefined && ProductCatagory != "") {
								// send product is valid

								var file = document.getElementById("NewProductImage").files[0];// ignore error
								if (file != null) {
									var reader = new FileReader();
									Data.DataModal.PTempName = ProductName;
									Data.DataModal.PTempDes = ProductDiscription;
									Data.DataModal.PTempPrice = ProductPrice;
									Data.DataModal.PTempCID = ProductCatagory;

									reader.onload = function(event) {
										database.query("UPDATE `product` SET `Name`='" + Data.DataModal.PTempName + "',`Description`='" + Data.DataModal.PTempDes + "',`Price`='" + Data.DataModal.PTempPrice + "',`categoryID`='" + Data.DataModal.PTempCID + "', `Image`='" + reader.result+ "' WHERE ID='" + product.ID + "'", function(data) { // ignore error
											Materialize.toast('Product successfully added', 1000); // ignore error
											// zero out last
											Data.DataModal.PTempName = null;
											Data.DataModal.PTempDes = null;
											Data.DataModal.PTempPrice = null;
											Data.DataModal.PTempCID = null;

											CMSui.CMSuiC.closeModal();
											CMSui.CMSuiC.loadProducts();
										});
									};
									reader.readAsDataURL(file);
								} else {
									database.query("UPDATE `product` SET `Name`='" + ProductName + "',`Description`='" + ProductDiscription + "',`Price`='" + ProductPrice + "',`categoryID`='" + ProductCatagory + "' WHERE ID='" + product.ID + "'", function(data) { // ignore error
										Materialize.toast('Product successfully changed', 1000); // ignore error
										// zero out last
										CMSui.CMSuiC.closeModal();
										CMSui.CMSuiC.loadProducts();
									});
								}
							} else {
								Materialize.toast('Please enter a valid Product category', 1000); // ignore error
							}
						} else {
							Materialize.toast('Please enter a valid Product price', 1000); // ignore error
						}
					} else {
						Materialize.toast('Please enter a valid Product discription', 1000); // ignore error
					}
				} else {
					Materialize.toast('Please enter a valid Product name', 1000); // ignore error
				}
			//} else {
				//Materialize.toast('Please select a image', 1000); // ignore error
			//}

		}

		public static removeCategory(categoryID:number): void{
			database.query("DELETE FROM `category` WHERE ID="+categoryID,function(){
				
			});
			CMSui.CMSuiC.loadCategorys();
		}

		public submitAddCategory(): void {
			var dataCategory = $("#BaseModal .modal-content #CatagoryName").val();
			if (dataCategory != undefined && dataCategory != "" && dataCategory != null) {
				// check if the name is not already taken. load all categorys on load in a list
				database.query("SELECT * FROM category", function(data) { // ignore error
					var goTrough = true;
					for (var i = 0; i < data.length; i++) {
						if (data[i].Name.toLowerCase() == dataCategory.toLowerCase()) {
							goTrough = false;
							break;
						}
					}
					if (goTrough) {
						database.query("INSERT INTO `category`(`ID`, `Name`) VALUES ('','" + dataCategory + "')", function(data) {
							
							database.query("SELECT * FROM category", function(data) {
								Data.DataModal.categorysTemp = data;
							});
							Materialize.toast('Succefully added a new category', 1000); // ignore error
							CMSui.CMSuiC.loadCategorys();
							CMSui.CMSuiC.closeModal();
						});
					} else {
						Materialize.toast('This category name is already taken', 1000); // ignore error
					}
				});
			} else {
				Materialize.toast('Please enter a valid name', 1000); // ignore error
			}
		}
	}
}

