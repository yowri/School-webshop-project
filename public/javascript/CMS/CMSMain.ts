/// <reference path="../lib/jquery.d.ts" />
/// <reference path="ProductClass.ts"/>
/// <reference path="CMSui.ts"/>
/// <reference path="Objects/OpenModalOBJ.ts"/>
/// <reference path="Interfaces/Interfaces.ts"/>
/// <reference path="Extra/Utils.ts"/>
/// <reference path="Objects/GenericFunctionOBJ.ts"/>
/// <reference path="Extra/Constants.ts"/>
module mainCMS{
	import Product = ProductClass.Product;
	import UI = CMSui.CMSuiC;
	import OpenModalOBJ = Modal.OpenModalOBJ;
	import Interfaces = interfaces;
	import Utils = utils;
	import ObjectsModule = Objects;
	
	export class Main{

		private UIController: UI;

		constructor(){
			database.query("SELECT * FROM category", function(data) { // ignore error
				Data.DataModal.categorysTemp = data;
			});

			// load all the data
			var getProductPartial = $.get("../../partialviews/AddProductPartial.html", function(data) {
										constants.PartialViews.AddProductPartial = data;
									});
			var getCatagoryItemPartial = $.get("../../partialviews/CatagoryListItem.html", function(data) {
				constants.PartialViews.CategoryListItem = data;
			});
			var getCatagoryPartial = $.get("../../partialviews/AddCatagoryPartial.html", function(data) {
				constants.PartialViews.AddCatagoryPartial = data;
			});
			var getProductItemPartial = $.get("../../partialviews/ProductListItem.html", function(data) {
				constants.PartialViews.ProductListItem = data;
			});

			$.when(getProductPartial, getCatagoryItemPartial, getProductItemPartial, getCatagoryPartial).done(function() {
				this.UIController = new UI();
			});
			// is ready
			
		}
	}
}