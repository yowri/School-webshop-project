var utils;
(function (utils) {
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.genericFunction = function (generic) {
            if (generic.getClassRef.prototype[generic.getFunctionRef] && generic.getClassRef.prototype[generic.getFunctionRef] instanceof Function) {
                if (generic.getExtraData != null) {
                    generic.getClassRef.prototype[generic.getFunctionRef](generic.getExtraData);
                }
                else {
                    generic.getClassRef.prototype[generic.getFunctionRef]();
                }
            }
            else {
                throw new Error("Function '" + generic.getFunctionRef + "' is not a valid function");
            }
        };
        return Utilities;
    }());
    utils.Utilities = Utilities;
})(utils || (utils = {}));
//# sourceMappingURL=Utils.js.map