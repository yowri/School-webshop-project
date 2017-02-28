/// <reference path="../lib/jquery.d.ts" />
/// <reference path="CMSui.ts"/>
/// <reference path="../../../node_modules/angular2/core.d.ts"/>
var Data;
(function (Data) {
    var DataModal = (function () {
        function DataModal() {
        }
        // add Product functions
        DataModal.prototype.initAddProduct = function () {
        };
        DataModal.prototype.submitAddProduct = function () {
            $("#BaseModal").closeModal(); // ignore error
        };
        // add catagory functions
        DataModal.prototype.initAddCategory = function () {
        };
        DataModal.prototype.submitAddCategory = function () {
            var dataCategory = $("#BaseModal .modal-content #CatagoryName").val();
            if (dataCategory != undefined && dataCategory != "" && dataCategory != null) {
                // check if the name is not already taken. load all categorys on load in a list
                database.query("SELECT * FROM category", function (data) {
                    var goTrough = true;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Name.toLowerCase() == dataCategory.toLowerCase()) {
                            goTrough = false;
                            break;
                        }
                    }
                    if (goTrough) {
                        database.query("INSERT INTO `category`(`ID`, `Name`) VALUES ('','" + dataCategory + "')");
                        Materialize.toast('Succefully added a new category', 1000); // ignore error
                        CMSui.CMSuiC.closeModal();
                    }
                    else {
                        Materialize.toast('This category name is already taken', 1000); // ignore error
                    }
                });
            }
            else {
                Materialize.toast('Please enter a valid name', 1000); // ignore error
            }
        };
        DataModal.bootstrapcategory = function () {
            /*	var catagoryList = ng.core.Component({ // ignore errors
                    selector: "categoryList",
                    template: '<h1 *ngFor="#item of items; #i = index">{{items[i].Name}}</h1>',
                    providers: [categoryService]
                }).Class({
                    constructor: [categoryService, function(service) {
                        this.items = service.data;
                    }]
                });
    
                ng.platform.browser.bootstrap(catagoryList);*/
        };
        return DataModal;
    }());
    Data.DataModal = DataModal;
})(Data || (Data = {}));
//# sourceMappingURL=DataModal.js.map