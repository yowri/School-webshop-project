/// <reference path="../lib/jquery.d.ts" />

/// <reference path="Objects/OpenModalOBJ.ts"/>
/// <reference path="Interfaces/Interfaces.ts"/>
/// <reference path="Extra/Utils.ts"/>
/// <reference path="Objects/GenericFunctionOBJ.ts"/>
/// <reference path="DataModal.ts"/>
/// <reference path="Extra/Constants.ts"/>
/// <reference path="Extra/Enums.ts"/>
module CMSui{
	import OpenModalOBJ = Modal.OpenModalOBJ;
	import Interfaces = interfaces;
	import Utils = utils;
	import genericFunctionOBJ = Objects.GenericFunctionOBJ;
	import sizeOBJ = Enumerators.size;
	import data = Data.DataModal;
	

	export class CMSuiC {
		
		constructor() {
			this.uiInit();
			CMSuiC.loadCategorys();
			CMSuiC.loadProducts();
		}

		uiInit():void{
			// init base bar
		

			$('ul.tabs').tabs();// Ignore error
			
			
			$('#addNewProduct').click(function(){
				var openModalTemplate = new OpenModalOBJ();
				openModalTemplate.setModalContent = constants.PartialViews.AddProductPartial;
				openModalTemplate.setInitCallBack = new genericFunctionOBJ(Data.DataModal, "initAddProduct", null);
				openModalTemplate.setSubmitCallBack = new genericFunctionOBJ(Data.DataModal, "submitAddProduct", null);
				openModalTemplate.setModalName = "Add new product";
				openModalTemplate.setSubmitText = "Add product";
				openModalTemplate.setModalSize = new sizeOBJ();
				openModalTemplate.getModalSize.width = "60%";
				openModalTemplate.getModalSize.height = "60%";
				CMSuiC.openModal(openModalTemplate);
				
			});
			$('#addNewCatagory').click(function() {
				var openModalTemplate = new OpenModalOBJ();
				var modalSize = new sizeOBJ();
				modalSize.width = "450px";
				modalSize.height = "300px";
				openModalTemplate.initModal(constants.PartialViews.AddCatagoryPartial,
				 "Add Catagory",
				 new genericFunctionOBJ(Data.DataModal, "initAddCategory",null),
				 new genericFunctionOBJ(Data.DataModal, "submitAddCategory", null),
				 true,
				 "Add Catagory",
				  modalSize
				  );
				openModalTemplate.setModalScroller = false;
				CMSuiC.openModal(openModalTemplate);
			});
		}

		AddNewItem():void{

		}
		
		public static closeModal():void{
			$("#BaseModal .modal-content").empty();
			$("#BaseModal").closeModal();
		}

		public static productItemCase;

		public static loadProducts():void{
			database.query("SELECT ID,Name,Description,Price,categoryID FROM product", function(data) {
				$("#ProductenCMS .ProductItem").remove();
				for (var i = 0; i < data.length; i++) {
					var item = $.parseHTML(constants.PartialViews.ProductListItem);
					$(item).find(".Title").text(data[i].Name);
					$(item).find(".DiscriptionValue").text(data[i].Description);
					$(item).find(".PriceValue").text(data[i].Price);
					
					database.query("SELECT CONVERT(Image USING utf8)as'Image' FROM `product` WHERE ID='" + data[i].ID + "'", function(data, parms) {
						$(parms).find(".Image").css('background-image', 'url(' + data[0].Image + ')');
					},undefined,undefined,item);

					$(item).find(".RemoveButton").click({id:data[i].ID},function(event){
						database.query("DELETE FROM `product` WHERE ID='" + event.data.id+"'",function(){
							
						});
						$(this).closest(".ProductItem").remove();
						
					});
					$(item).find(".Edit").click({ obj: data[i] }, function(event) {
						CMSuiC.ProductDetails(event.data.obj);
					});

					// loopje
					for (var e = 0; e < Data.DataModal.categorysTemp.length;e++){
						if(Data.DataModal.categorysTemp[e].ID == data[i].categoryID){
							$(item).find(".CategoryValue").text(Data.DataModal.categorysTemp[e].Name);
						}
					}
					$("#ProductenCMS").append(item);
				}
			});
		}

		public static ProductDetails(product):void{
			var openModalTemplate = new OpenModalOBJ();
			openModalTemplate.setModalContent = constants.PartialViews.AddProductPartial;
			openModalTemplate.setInitCallBack = new genericFunctionOBJ(Data.DataModal, "initProductSettings", product);
			openModalTemplate.setSubmitCallBack = new genericFunctionOBJ(Data.DataModal, "submitProductSettings", product);
			openModalTemplate.setModalName = "Edit product";
			openModalTemplate.setSubmitText = "Save Changes";
			openModalTemplate.setModalSize = new sizeOBJ();
			openModalTemplate.getModalSize.width = "60%";
			openModalTemplate.getModalSize.height = "60%";
			CMSuiC.openModal(openModalTemplate);
		}

		public static loadCategorys():void{
			database.query("SELECT * FROM category", function(data) {
				$("#CatagorieenCMS .CategoryListItem").remove();
				for (var i = 0; i < data.length;i++){
					var item = $.parseHTML(constants.PartialViews.CategoryListItem);
					$(item).find(".Title").text(data[i].Name);

					$(item).find(".removeButton").click({category:data[i]},function(e){
						Data.DataModal.removeCategory(e.data.category.ID);
					});
					$("#CatagorieenCMS").append(item);
				}
			});
		}

		// open the base modal with the right information
		static openModal(ModalOBJ:OpenModalOBJ): void {
			// clear ui
			$("#BaseModal .modal-content").empty();
			$("#BaseModal .modal-content").append(ModalOBJ.getModalContent);

			// check/set button settings
			$("#BaseModal .modal-footer .Submit").text(ModalOBJ.getSubmitText);
			if(ModalOBJ.getUseSecondButton == false){
				$("#BaseModal .modal-footer .Close").css("display", "none");
			} else {
				$("#BaseModal .modal-footer .Close").css("display", "initial");
			}

			// set click listener buttons
			if(ModalOBJ.getSubmitCallBack != null && ModalOBJ.getSubmitCallBack != undefined){
				// set callback
				$("#BaseModal .modal-footer .Submit").unbind("click");
				$("#BaseModal .modal-footer .Submit").click(function(){
					Utils.Utilities.genericFunction(ModalOBJ.getSubmitCallBack);
				});
			}
			
			// set initCallBack last
			if (ModalOBJ.getInitCallBack != null && ModalOBJ.getInitCallBack != undefined) {
				utils.Utilities.genericFunction(ModalOBJ.getInitCallBack);
			}

			$("#BaseModal").css({
				"width":ModalOBJ.getModalSize.width,
				"height": ModalOBJ.getModalSize.height
			});

			if(ModalOBJ.getModalScrollBool == false){
				$("#BaseModal .modal-content").css("overflow-y", "hidden");
			} else {
				$("#BaseModal .modal-content").css("overflow-y", "auto");
			}

			// finaly open the modal
			$("#BaseModal").openModal(); // ignore error
		}

	}
}