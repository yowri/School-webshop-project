/// <reference path="../lib/jquery.d.ts" />
/// <reference path="ProductClass.ts"/>
/// <reference path="CMSui.ts"/>
/// <reference path="Objects/OpenModalOBJ.ts"/>
/// <reference path="Interfaces/Interfaces.ts"/>
/// <reference path="Extra/Utils.ts"/>
/// <reference path="Objects/GenericFunctionOBJ.ts"/>
/// <reference path="Extra/Constants.ts"/>
var mainCMS;
(function (mainCMS) {
    var UI = CMSui.CMSuiC;
    var Main = (function () {
        function Main() {
            // load all the data
            var getProductPartial = $.get("../../partialviews/AddProductPartial.html", function (data) {
                constants.PartialViews.AddProductPartial = data;
            });
            var getCatagoryPartial = $.get("../../partialviews/AddCatagoryPartial.html", function (data) {
                constants.PartialViews.AddCatagoryPartial = data;
            });
            $.when(getProductPartial, getCatagoryPartial).done(function () {
                this.UIController = new UI();
            });
            // is ready
        }
        return Main;
    }());
    mainCMS.Main = Main;
})(mainCMS || (mainCMS = {}));
//# sourceMappingURL=CMSMain.js.map