var Objects;
(function (Objects) {
    var GenericFunctionOBJ = (function () {
        function GenericFunctionOBJ(classRef, functionRef, extraData) {
            this.classref = classRef;
            this.functionRef = functionRef;
            if (extraData != null) {
                this.extraData = extraData;
            }
        }
        Object.defineProperty(GenericFunctionOBJ.prototype, "getClassRef", {
            //getters
            get: function () {
                return this.classref;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GenericFunctionOBJ.prototype, "getFunctionRef", {
            get: function () {
                return this.functionRef;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GenericFunctionOBJ.prototype, "getExtraData", {
            get: function () {
                return this.extraData;
            },
            enumerable: true,
            configurable: true
        });
        return GenericFunctionOBJ;
    }());
    Objects.GenericFunctionOBJ = GenericFunctionOBJ;
})(Objects || (Objects = {}));
//# sourceMappingURL=GenericFunctionOBJ.js.map