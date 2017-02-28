System.register(['angular2/platform/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1;
    var productComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            ;
            productComponent = (function () {
                function productComponent() {
                }
                return productComponent;
            }());
            exports_1("productComponent", productComponent);
            browser_1.bootstrap(productComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map