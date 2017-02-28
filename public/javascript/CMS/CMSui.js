/// <reference path="../lib/jquery.d.ts" />
/// <reference path="Objects/OpenModalOBJ.ts"/>
/// <reference path="Interfaces/Interfaces.ts"/>
/// <reference path="Extra/Utils.ts"/>
/// <reference path="Objects/GenericFunctionOBJ.ts"/>
/// <reference path="DataModal.ts"/>
/// <reference path="Extra/Constants.ts"/>
/// <reference path="Extra/Enums.ts"/>
var CMSui;
(function (CMSui) {
    var OpenModalOBJ = Modal.OpenModalOBJ;
    var Utils = utils;
    var genericFunctionOBJ = Objects.GenericFunctionOBJ;
    var sizeOBJ = Enumerators.size;
    var CMSuiC = (function () {
        function CMSuiC() {
            this.uiInit();
            this.loadCategorys();
            // boodstrap categoryList
            ng.platform.browser.bootstrap(categorylist); // ignore error
        }
        CMSuiC.prototype.uiInit = function () {
            // init base bar
            $('ul.tabs').tabs(); // Ignore error
            $('#addNewProduct').click(function () {
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
            $('#addNewCatagory').click(function () {
                var openModalTemplate = new OpenModalOBJ();
                var modalSize = new sizeOBJ();
                modalSize.width = "450px";
                modalSize.height = "300px";
                openModalTemplate.initModal(constants.PartialViews.AddCatagoryPartial, "Add Catagory", new genericFunctionOBJ(Data.DataModal, "initAddCategory", null), new genericFunctionOBJ(Data.DataModal, "submitAddCategory", null), true, "Add Catagory", modalSize);
                openModalTemplate.setModalScroller = false;
                CMSuiC.openModal(openModalTemplate);
            });
        };
        CMSuiC.prototype.AddNewItem = function () {
        };
        CMSuiC.closeModal = function () {
            $("#BaseModal .modal-content").empty();
            $("#BaseModal").closeModal();
        };
        CMSuiC.prototype.loadCategorys = function () {
            database.query("SELECT * FROM category", function (data) {
                console.log(data);
            });
        };
        // open the base modal with the right information
        CMSuiC.openModal = function (ModalOBJ) {
            // clear ui
            $("#BaseModal .modal-content").empty();
            $("#BaseModal .modal-content").append(ModalOBJ.getModalContent);
            // check/set button settings
            $("#BaseModal .modal-footer .Submit").text(ModalOBJ.getSubmitText);
            if (ModalOBJ.getUseSecondButton == false) {
                $("#BaseModal .modal-footer .Close").css("display", "none");
            }
            else {
                $("#BaseModal .modal-footer .Close").css("display", "initial");
            }
            // set click listener buttons
            if (ModalOBJ.getSubmitCallBack != null && ModalOBJ.getSubmitCallBack != undefined) {
                // set callback
                $("#BaseModal .modal-footer .Submit").click(function () {
                    Utils.Utilities.genericFunction(ModalOBJ.getSubmitCallBack);
                });
            }
            // set initCallBack last
            if (ModalOBJ.getInitCallBack != null && ModalOBJ.getInitCallBack != undefined) {
                utils.Utilities.genericFunction(ModalOBJ.getInitCallBack);
            }
            $("#BaseModal").css({
                "width": ModalOBJ.getModalSize.width,
                "height": ModalOBJ.getModalSize.height
            });
            if (ModalOBJ.getModalScrollBool == false) {
                $("#BaseModal .modal-content").css("overflow-y", "hidden");
            }
            else {
                $("#BaseModal .modal-content").css("overflow-y", "auto");
            }
            // finaly open the modal
            $("#BaseModal").openModal(); // ignore error
        };
        return CMSuiC;
    }());
    CMSui.CMSuiC = CMSuiC;
})(CMSui || (CMSui = {}));
//# sourceMappingURL=CMSui.js.map